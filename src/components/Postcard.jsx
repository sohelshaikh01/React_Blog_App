import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";


const PostCard = ({ $id = "N/A", title = "Untitled", content = "", featuredImage }) => {
    
    const imageUrl = featuredImage;
    // Image Loading is not Included in this plan.

    return (
        <Link to={`/post/${$id}`} className="w-40 h-56">
            <div className="w-full bg-slate-200 border text-gray-800 border-slate-400 rounded-xl p-2 sm:p-4">
                {featuredImage && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="rounded-xl mb-4"
                    />
                )}
                <h2 className="text-xl font-bold text-black">{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </Link>
    );
};

export default PostCard;


