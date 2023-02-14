import css from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

interface IPagination {
	countPagination: number;
	currentPage: number;
	callbackNavigate: (nextSelectedPage: number) => void;
}

const Pagination = ({ countPagination, currentPage, callbackNavigate }: IPagination) => {
	return (
		<ReactPaginate
			breakLabel=". . ."
			nextLabel="След. >"
			onClick={({ nextSelectedPage }) => {
				if (typeof nextSelectedPage === 'undefined') return;
				callbackNavigate(nextSelectedPage);
			}}
			pageRangeDisplayed={2}
			pageCount={countPagination}
			previousLabel="< Пред."
			renderOnZeroPageCount={() => {}}
			containerClassName={css.paginationContainer}
			pageLinkClassName={css.pageLinkClassName}
			activeLinkClassName={css.activeLinkClassName}
			breakClassName={css.breakClassName}
			previousClassName={css.previousClassName}
			nextClassName={css.nextClassName}
			ariaLabelBuilder={(pageindex, selectedpage) => `Перейти на страницу ${pageindex}`}
			forcePage={currentPage}
		/>
	);
};

export default Pagination;
