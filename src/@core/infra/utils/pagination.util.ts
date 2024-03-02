import { Request } from "express";

export function pagination({ query }: Request) {
	const currentPage = query?.page ? Number(query.page) : 1;
	const perPage = query?.perPage ? Number(query.perPage) : 10;

	return {
		currentPage,
		perPage,
	}
}

export function getLastPage({ query }: Request, totalItems: number) {
	const perPage = query?.perPage ? Number(query.perPage) : 10;
	let totalPages = Math.floor(totalItems / perPage);

	if (totalItems % perPage !== 0) {
		totalPages++;
	}

	return totalPages;
}

export function getPrevPage(currentPage: number) {
	return currentPage === 1 ? null : currentPage - 1;
}

export function getNextPage(currentPage: number) {
	return currentPage === 1 ? null : currentPage + 1;
}
