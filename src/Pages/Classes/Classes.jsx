import { useQuery } from "@tanstack/react-query";
import ClassesCard from "./ClassesCard";

const Classes = () => {

    const { data: approvedClasses = [], refetch } = useQuery([''], async () => {
        const res = await fetch('http://localhost:8000/approved')
        return res.json();
    });
// console.log(approvedClasses);
    return (

            <div className="grid grid-cols-3 gap-4 justify-center mx-40 my-20">
                {
                    approvedClasses.map(item => <ClassesCard
                    key={item._id}
                    item={item}
                    ></ClassesCard>)
                }
            </div>

    );
};

export default Classes;