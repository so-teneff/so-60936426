export const getGroups = async () => {
  try {
    const groupApiUrl = getDashboardPath(GROUPS_TAB_INDEX);
    const data = await fetch(groupApiUrl, { cache: 'force-cache' });
    const userData = await data.json();
    return userData;
  } catch (error) {
    throw Error(error);
  }
};