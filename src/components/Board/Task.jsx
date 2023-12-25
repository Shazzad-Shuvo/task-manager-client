import { Draggable } from 'react-beautiful-dnd';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';


const Task = ({ todosList, task, index }) => {
    console.log(todosList);
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const { data: List = [], refetch } = useQuery({
        queryKey: ['todosList'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/tasks?user=${user.email}`);
          return res.data;
        }
      })


    const handleDeleteTask = (todo) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/tasks/${todo._id}`);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${todo.title} deleted successfully!`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }

            }
        });
    }





    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                // isDragging={snapshot.isDragging}

                >
                    {
                        todosList.map(todo =>
                            <div key={todo._id} className='mt-2 bg-teal-100'>
                                <div className='p-2'>
                                    <p className='flex justify-between px-2 pt-2'>
                                        <small>
                                            Priority: {todo.priority}
                                        </small>
                                        <small>
                                            Due: {todo.deadline}
                                        </small>
                                    </p>
                                    <h2 className='flex justify-center p-2'>{todo.title}</h2>
                                    <p>{todo.description.slice(0, 20)}</p>
                                    <div className='flex justify-end gap-4'>
                                        <div>
                                            <Link to={`/dashboard/updateTask/${todo._id}`}>
                                                <button>
                                                    <AiFillEdit className='hover:text-green-500 duration-500 text-lg' />
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleDeleteTask(todo)}
                                            >
                                                <AiFillDelete className='hover:text-red-500 duration-500' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
};

export default Task;