export const SearchPanel = ({ params, setParams, users }) => {
  return (
    <form>
      <input
        type="text"
        value={users.id}
        onChange={(event) => {
          setParams({
            ...params,
            name: event.target.value,
          });
        }}
      />
      <select
        onChange={(event) => {
          setParams({
            ...params,
            id: event.target.value,
          });
        }}
      >
        <option value={""}>负责人</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
