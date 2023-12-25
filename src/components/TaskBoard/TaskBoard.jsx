import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Column from "../Board/Column";
import { DragDropContext } from "react-beautiful-dnd";
import useAuth from "../../hooks/useAuth";

const TaskBoard = () => {

  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();
  console.log(user);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [complete, setComplete] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const { data: todosList = [], refetch } = useQuery({
    queryKey: ['todosList'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?user=${user.email}`);
      return res.data;
    }
  })

  console.log(todosList);
  // setTodos(todosList);


  const onSubmit = async (data) => {
    console.log(data);
    if (data.title || data.deadline || data.description || data.priority) {
      document.getElementById('my_modal_1').close();

      const task = {
        user: user.email,
        title: data.title,
        deadline: data.deadline,
        priority: data.priority,
        description: data.description
      };

      const taskRes = await axiosPublic.post('/tasks', task);

      console.log(taskRes.data);
      if (taskRes.data.insertedId) {
        reset();
        refetch();
        // setTodos(todosList);
        Swal.fire({
          icon: "success",
          title: "Task added Successfully!!",
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
  }

  // console.log(todos);


  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;
  }




  // const handleAdd = (e) => {
  //   e.preventDefault();

  //   if (todo) {
  //     setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
  //     setTodo("");
  //   }
  // };

  return (
    <div>
      <div className="card-actions mt-10">
        <button className="btn bg-gradient-to-r from-cyan-300/80 to-blue-500/80 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-700/80 text-white rounded-full" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPlus className="text-lg"></FaPlus> Create Task</button>

        <dialog id="my_modal_1" className="modal -z-10">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg text-center">Create Task</h3>

            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
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
                          placeholder="Enter title"
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
                          placeholder=""
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
                          defaultValue=''
                          className="input input-bordered rounded-lg w-full">
                          <option value='' disabled hidden>-- Select Priority Level --</option>
                          <option value="low">Low</option>
                          <option value="moderate">Moderate</option>
                          <option value="high">High</option>
                        </select>
                        {errors.priority && <span className="text-red-600 mt-2">Priority is required</span>}
                      </label>
                    </div>
                    {/* <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Title </span>
                      </label>
                      <label className="">
                        <input {...register("title", { required: true })}
                          type="text"
                          placeholder="Enter title"
                          name="title" className="input input-bordered rounded-lg w-full" />
                        {errors.title && <span className="text-red-600">Title is required</span>}
                      </label>
                    </div> */}
                  </div>
                  {/* description */}
                  <div className="md:flex mb-5">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <label className="">
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24 w-full" placeholder="Class Description"></textarea>
                        {errors.description && <span className="text-red-600">Description is required</span>}
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className="btn bg-gradient-to-r from-cyan-300/80 to-blue-500/80 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-700/80 text-white btn-block"
                >Create</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* <TodoList
        todos={todos}
        setTodos={setTodos}
      ></TodoList> */}
      <h2 className='text-center my-8 font-bold text-3xl'>Task Board</h2>
      <div className="flex justify-between gap-5">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div>
            <div className='flex flex-row justify-between items-center'>
              <Column
                todosList={todosList}
                title={"To-Do"} tasks={"Incomplete"} id={"1"} />
            </div>
          </div>
        </DragDropContext>
        {/* <DragDropContext onDragEnd={handleDragEnd}>
          <div>
            <div className='flex flex-row justify-between items-center'>
              <Column title={"To-Do"} tasks={"Incomplete"} id={"1"} />
            </div>
          </div>
        </DragDropContext>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div>
            <div className='flex flex-row justify-between items-center'>
              <Column title={"To-Do"} tasks={"Incomplete"} id={"1"} />
            </div>
          </div>
        </DragDropContext> */}
      </div>
    </div>
  );
};

export default TaskBoard;