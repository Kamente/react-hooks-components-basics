export default function MyInfos({ myInfos }) {
    return (
        <div>
            <p>{myInfos.name}</p>
            <p>{myInfos.age}</p>
            <p>{myInfos.schools.sec}</p>
            <p>{myInfos.schools.pry}</p>
        </div>
    )
}