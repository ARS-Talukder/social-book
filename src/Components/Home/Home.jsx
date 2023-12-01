import { MdPhotoLibrary } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaRegComment, FaRegLaughBeam } from "react-icons/fa";
import { GiRoyalLove } from "react-icons/gi";
import { FaRegFaceAngry } from "react-icons/fa6";

const Home = () => {
    return (
        <div className="w-1/3 mx-auto">
            {/* -----------Post Section------------ */}
            <section className="bg-white rounded-xl p-3 my-4">
                <div className="flex justify-center items-center mb-2">
                    <div className="avatar w-10">
                        <div className="rounded-full ring ring-primary ring-offset-base-100">
                            <img src="https://i.ibb.co/ctFS6Qt/login-Avatar.png" alt="login avatar" />
                        </div>
                    </div>
                    <input type="text" placeholder="What's on your mind" className="input input-bordered input-sm w-full mx-4 max-w-xs" />
                    <button className="flex btn btn-sm">
                        <p className="text-2xl text-green-600 mr-2"><MdPhotoLibrary /></p>
                        <p>Photo</p>
                    </button>
                </div>
                <hr />
                <div className="flex justify-center mt-2">
                    <button className="w-1/2 flex btn btn-sm btn-primary">
                        <p>Post</p>
                    </button>
                </div>
            </section>

            {/* -----------News Feed Section------------ */}
            <section className="bg-white rounded-xl p-3 my-4">
                <div className="flex items-center mb-2">
                    <div className="avatar w-10">
                        <div className="rounded-full ring ring-primary ring-offset-base-100">
                            <img src="https://i.ibb.co/ctFS6Qt/login-Avatar.png" alt="login avatar" />
                        </div>
                    </div>
                    <h3 className="font-bold mx-4">Shadhin Talukder</h3>
                </div>
                <div className="mb-2">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ea perferendis ullam sint adipisci? A officiis dolores reprehenderit tempora ducimus perferendis rem numquam, at iste eum, assumenda quidem pariatur aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nihil inventore esse cum laboriosam tempora nemo odio incidunt sapiente ex. Vitae tempore consequuntur perspiciatis temporibus officiis? Veritatis quasi expedita quam.</p>
                </div>
                <div className="mb-2">
                    {/* <img src="https://i.ibb.co/q58BygG/mouse.jpg" alt="" /> */}
                    <img src="https://i.ibb.co/hKb06gr/my-cover-short.jpg" alt="" />
                    {/* <img src="https://i.ibb.co/8XGgsVq/linkedin.png" alt="" /> */}
                </div>
                <div className="flex justify-evenly py-1 my-1 border rounded-xl w-3/4">
                    <button className="text-xl text-blue-600 border rounded-xl mx-2 btn btn-sm"><BiLike /></button>
                    <button className="text-xl text-red-700 border rounded-xl mx-2 btn btn-sm"><GiRoyalLove /></button>
                    <button className="text-xl text-yellow-600 border rounded-xl mx-2 btn btn-sm"><FaRegLaughBeam /></button>
                    <button className="text-xl text-yellow-600 border rounded-xl mx-2 btn btn-sm"><FaRegFaceAngry /></button>
                </div>
                <div className="flex">
                    <button className="flex items-center btn btn-sm mr-6">
                        <p className="text-xl"><BiLike /></p>
                        <p>Like</p>
                    </button>
                    <button className="flex items-center btn btn-sm" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <p className="text-xl"><FaRegComment /></p>
                        <p>Comment</p>
                    </button>

                </div>
            </section>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>

        </div>
    );
};

export default Home;