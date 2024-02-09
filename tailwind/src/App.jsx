import { useState,useRef } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Modal from "./components/Modal";
import ShowProject from "./components/ShowProject";

function App() {
  const modal = useRef();
const [showProject, setshowProject] = useState()
  const [projectsState, setprojectsState] = useState({
    createProjStatus: undefined,
    projects: [],
  });
  const [projectDetails, setprojectDetails] = useState({
    title: "",
    desc: "",
    due: "",
  });

  const changeProjectState = () => {
    setprojectsState((prev) => {
      setshowProject(null)
      return {
        ...prev,
        createProjStatus: null,
      };
    });
  };
  const addProjectDetails = (key, value) => {
    setprojectDetails((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const addProject = () => {
    console.log("projectDtails", projectDetails);
    if (
      projectDetails.title.trim() === "" ||
      projectDetails.desc.trim() === "" ||
      projectDetails.due.trim() === ""
    ) {
      modal.current.open();
      return;
    } 
    let p = {
      ...projectDetails,
      id: Math.random(),
    };
    setprojectsState((prev) => {
      return {
        createProjStatus: undefined,
        projects: [...prev.projects, p],
      };
    });
  };
  
  const cancel = () => {
    setprojectsState((prev) => {
      return {
        ...prev,
        createProjStatus: undefined,
      };
    });
  };
const deleteProject=()=>{
  setshowProject(null)
  setprojectsState((prev) => {
      return {
        createProjStatus: undefined,
        projects: prev.projects.filter((p)=>p.id !== showProject.id),
      };
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className="font-bold text-2xl text-slate-50">Invalid input</h2>
        <p className="text-xl text-slate-50 mt-3">Enter valid values</p>
      </Modal>
      <main className="h-screen flex gap-5">
        <Sidebar
          changeProjectState={changeProjectState}
          projectsState={projectsState}
          setshowProject={setshowProject}
          showProject={showProject}
        />
        {(projectsState.createProjStatus === undefined && !showProject) && (
          <NoProject changeProjectState={changeProjectState} />
        )}
        {(projectsState.createProjStatus === null && !showProject) && (
          <NewProject
            addProjectDetails={addProjectDetails}
            projectDetails={projectDetails}
            addProject={addProject}
            cancel={cancel}
          />
        )}
        {
        showProject &&
          <ShowProject showProject={showProject} deleteProject={deleteProject}/>
        }
      </main>
    </>
  );
}

export default App;
