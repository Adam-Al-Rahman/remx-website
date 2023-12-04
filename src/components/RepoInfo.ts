export interface TypeRepoInfo {
  name: string;
  zipball_url: string;
  tarball_url: string;
  commit: {
    sha: string;
    url: string;
  };
  node_id?: string;
}

let lastFetchTime: number = 0;
let cachedData: TypeRepoInfo[] | null = null;

const fetchRepoInfo = async (username: string, repository: string): Promise<TypeRepoInfo[] | null> => {
  const currentTime = new Date().getTime();
  const oneHourInMilliseconds = 60 * 60 * 1000;

  if (!cachedData || currentTime - lastFetchTime >= oneHourInMilliseconds) {
    try {
      const res = await fetch(`https://api.github.com/repos/${username}/${repository}/tags`, {
        cache: 'no-cache',
      });

      if (res.ok) {
        const datas: TypeRepoInfo[] = await res.json();
        cachedData = datas;
        lastFetchTime = currentTime;
        return datas;
      } else {
        // Handle non-successful response
        throw new Error(`Failed to fetch repository information: ${res.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching repository information:', error);
      return null;
    }
  } else {
    return cachedData;
  }
};

export default fetchRepoInfo;

