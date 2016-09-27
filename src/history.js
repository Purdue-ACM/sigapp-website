import createHistory from 'history/createBrowserHistory';
import useQueries from 'history/lib/useQueries';

export default useQueries(createHistory)();
