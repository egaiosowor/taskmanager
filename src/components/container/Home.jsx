import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddEditProjectModal } from '../ui/modals';
import Task from '../ui/Task'
import Header from "../layout/Header";
import { isDue } from "../../utils";

function Home({ onToggle }) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const projects = useSelector((state) => state.projects);
  const project = projects.find((project) => project.isActive === true);

  const allTasks = project.tasks 
  const dueTasks = allTasks.filter((task) => task.status !== "completed" && isDue(task.dueDate) )


  return (
    <div className="flex-[4] px-2">
      <Header
        setIsProjectModalOpen={setIsProjectModalOpen}
        isProjectModalOpen={isProjectModalOpen}
        onToggle={onToggle}
      />

      {/* Columns Section */}

      <div className="flex px-2">
        <div>
          {
            allTasks.map((task, index)=>(
              <Task key={index} taskIndex={index} />
            ))
          }
        </div>
      </div>
      
      {isProjectModalOpen && (
        <AddEditProjectModal
          type="edit"
          setIsProjectModalOpen={setIsProjectModalOpen}
        />
      )}
    </div>
  );
}

export default Home;
