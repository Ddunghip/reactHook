import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "../customize/fetch";
import './Blog.scss'

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogDetail, loading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    console.log(dataBlogDetail);
    const handleBackData = () => {
        history.push("/blog");
    }
    return (
        <>
            <button type="button" onClick={handleBackData}>
                Back
            </button>
            <div>hello{id}</div>
            <div className="blog-detail">
                {dataBlogDetail && dataBlogDetail !== null &&
                    <>
                        <div className="title">Blog ID: {id} - {loading === true ? 'Loading data...' : dataBlogDetail.title}</div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </>
                }

            </div>

        </>
    )
}
export default DetailBlog