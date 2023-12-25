import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const UpdateTask = () => {
    const axiosPublic = useAxiosPublic();

    const {_id, title, deadline, priority, description } = useLoaderData();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log(data);


        const task = {
            title: data.title,
            deadline: data.deadline,
            priority: data.priority,
            description: data.description
        };
        console.log(task);

        const taskRes = await axiosPublic.patch(`/tasks/${_id}`, task);
        console.log(taskRes.data);
        if (taskRes.data.modifiedCount > 0) {
            // show success message in popup
            Swal.fire({
                icon: "success",
                title: `${data.title} edited Successfully!!`,
                showConfirmButton: false,
                timer: 1500,
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                        `
                },
                hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                        `
                }
            });
        }

    }


    return (
        <div className="min-h-screen">

            <div className="bg-[#F4F3F0] p-6 lg:p-24">
                <div className="border-b border-gray-900/10">
                    <h2 className="text-4xl font-extrabold mb-8 text-center ">Update Task</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-8">
                        {/* Title */}
                        <div className="md:flex mb-5 mt-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title </span>
                                </label>
                                <label className="">
                                    <input {...register("title", { required: true })}
                                        type="text"
                                        defaultValue={title}
                                        name="title" className="input input-bordered rounded-lg w-full" />
                                    {errors.title && <span className="text-red-600">Title is required</span>}
                                </label>
                            </div>
                        </div>
                        {/* Deadline */}
                        <div className="md:flex mb-5 mt-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Deadline </span>
                                </label>
                                <label className="">
                                    <input {...register("deadline", { required: true })}
                                        type="date"
                                        defaultValue={deadline}
                                        name="deadline" className="input input-bordered rounded-lg w-full" />
                                    {errors.deadline && <span className="text-red-600">Deadline is required</span>}
                                </label>
                            </div>
                        </div>
                        {/* Priority */}
                        <div className="md:flex mb-5 mt-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Priority</span>
                                </label>
                                <label className="">
                                    <select {...register("priority", { required: true })}
                                        defaultValue={priority}
                                        className="input input-bordered rounded-lg w-full">
                                        <option value='' disabled hidden>-- Select Priority Level --</option>
                                        <option value="low">Low</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="high">High</option>
                                    </select>
                                    {errors.priority && <span className="text-red-600 mt-2">Priority is required</span>}
                                </label>
                            </div>
                        </div>
                        {/* description */}
                        <div className="md:flex mb-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="">
                                    <textarea
                                        {...register("description", { required: true })}
                                        className="textarea textarea-bordered h-24 w-full"
                                        defaultValue={description}></textarea>
                                    {errors.description && <span className="text-red-600">Description is required</span>}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn bg-gradient-to-r from-cyan-300/80 to-blue-500/80 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-700/80 text-white btn-block"
                    >Update</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateTask;