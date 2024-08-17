import { HeaderDashboardComponent } from "@/components/dashboard/Header";
import { TodosGridComponent } from "@/components/todos/TodosGrid";
import prisma from "@/lib/prisma";

export const metadata = {
  title: 'Dash-1 | Tareas',
  description: 'Página de tareas',
};

const pageData = {
  name: 'Tareas',
  description: 'Página de tareas',
  father: '',
  path: '',
  dashboard: 'Dash-1'
}

export default async function TareasDash1Page() {

    const todos = await prisma.todo.findMany( {orderBy: {description: 'asc'}});

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>

            <HeaderDashboardComponent {...pageData} />

        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-neutral-400 m-4 overflow-y-auto`}>

          <TodosGridComponent todos={todos}/>

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}