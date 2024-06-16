import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Swal from 'sweetalert2';
import { DeleteProjectService, getAllProjects } from '../../../Infrastructure/Services/ProjectService';
import { useAppDispatch, useAppSelector } from '../../../Application/Store/hook';
import toast from 'react-hot-toast';
import { InitProjectDeleteState } from '../../../Application/Actions/ProjectActions';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export default function DeleteProjectModal({active, setActive} : {active : boolean, setActive :   Dispatch<SetStateAction<boolean>>,}) {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate  = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const projectState = useAppSelector(state => state.projects);
    //list of projects
    const projects = projectState.projects;
    //delete project status
    const deleteProjectState = projectState.delete_project_status;

    //get projectId on GET
    const href  = searchParams.get('href');
    const projectId = href ?  atob(href).split('-')[0] : '';

    if (active && projectId) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                DeleteProjectService(parseInt(projectId));
                setActive(false);
            } else {
                handleClose();
            }
        });

    }

useEffect(() => {
    if (deleteProjectState == true) {
      toast.success('Project delete sucessfully');
      handleClose();
      Swal.fire({
        title: "Deleted !",
        text: "Your project and all its elements have been deleted.",
        icon: "success"
      });
    }
    if (deleteProjectState == false) {
      toast.error('Something went wrong');
      Swal.fire({
        title: "Something went wrong !",
        text: "Check your authorization and try again",
        icon: "error"
      });
    }
    dispatch(InitProjectDeleteState());
    getAllProjects();
  }, [deleteProjectState])


  function handleClose () {
    setActive(false);
    navigate(location.pathname);
  }
/* Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  }); */
    
  return <></>
}
