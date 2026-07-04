import students from "@/data/students";
/*
    LOGICA DAS GRADE,
    1= definir as médias das grades
    2= se o status estiver ativo, a média aparece, caso contraio fica -- 
    3= USAR MAP() para renderizar cada aluno, assim não fica um codigo extenso
    */

// funcão para média
function average(score1: number, score2: number) {
  return (score1 + score2) / 2;
}

export function StudentTable() {
  return (
    <section>
      <div>

        <table className="w-screen">
          <thead>
            <tr className="bg-gray-700 text-white ">
              <th className="py-1 px-3 text-start">Name</th>
              <th>Status</th>
              <th>Grade1</th>
              <th>Grade2</th>
              <th>Grade Final</th>
            </tr>
          </thead>
          <tbody>

            {students.map((student) => (
              <tr key={student.id} className="bg-gray-300 border-b-1 text-center">
                <td className="p-3">
                  <div className="flex gap-4">
                    <img className="rounded-full h-10" src={student.avatar} alt="" />
                    <div className="flex flex-col text-start">
                      <span>{student.name}</span>
                      <span className="text-[12px]">{student.email}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <span className={`px-2 py-1 rounded text-white ${student.active ? "bg-green-600" : "bg-red-600"}`}>
                  {student.active ? "Active" : "Inactive"}
                </span></td>

                <td>{student.grade1}</td>
                <td>{student.grade2}</td>
                <td>{student.active ? average(student.grade1, student.grade2).toFixed(1) : "--"}</td>
              </tr>
            ))}

          </tbody>
        </table>


      </div>
    </section>
  );
}
/*             
        

                    {student.active
                  ? average(student.grade1, student.grade2).toFixed(1)
                  : "--"}


                
    */