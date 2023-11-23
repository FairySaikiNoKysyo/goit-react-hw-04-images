import { LoadMoreStyled } from "./LoadMoreBtn.styled"

export const LoadMoreBtn = ({onLoadMore}) => {
    return(
        <LoadMoreStyled type="button" onClick={onLoadMore} >
            Load more
        </LoadMoreStyled>
    )
}