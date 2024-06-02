import PrivateProvider from '../Providers/PrivateProvider';
import Dashboard from '../../Layouts/Dashboard';
import { BookListContainer } from '../../Components/Organism/Books';

function List() {
    return (
        <PrivateProvider>
            <Dashboard>
                <BookListContainer />
            </Dashboard>
        </PrivateProvider>
    );
}

export default List;
