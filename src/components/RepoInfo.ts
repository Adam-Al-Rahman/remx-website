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

const fetchRepoInfo = async (username: string, repository: string): Promise<TypeRepoInfo[] | null> => {
  const currentTime = new Date().getTime();
  const oneHourInMilliseconds = 60 * 60 * 1000;
  const lastFetchTime = localStorage.getItem('lastFetchTime');
  const cachedData = JSON.parse(localStorage.getItem('modelInfo') || 'null');

  if (!cachedData || !lastFetchTime || currentTime - parseInt(lastFetchTime) >= oneHourInMilliseconds) {
    try {
      const res = await fetch(`https://api.github.com/repos/${username}/${repository}/tags`, {
        cache: 'no-cache',
      });

      if (res.ok) {
        const datas: TypeRepoInfo[] = await res.json();
        localStorage.setItem('modelInfo', JSON.stringify(datas));
        localStorage.setItem('lastFetchTime', currentTime.toString());
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

