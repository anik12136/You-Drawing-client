import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./instructorCard";

const Instructors = () => {

    const { data: instructors = [], refetch } = useQuery([''], async () => {
        const res = await fetch('http://localhost:8000/instructors')
        return res.json();
    });

console.log(instructors)
    return (
        <div className="grid grid-cols-3 gap-4 justify-center mx-40 my-20">
            {
                instructors.map(instructor =><InstructorCard
                key={instructor._id}
                instructor={instructor}
                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;