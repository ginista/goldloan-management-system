import { useUserAuth } from "../context/UserAuthContext";

const { logOut } = useUserAuth();
const handleLogOut = async () => {
  try {
    await logout();
  } catch (e) {
    console.log(e.message);
  }
};
<Button variant="primary" onClick={handleLogOut}>
  Log out
</Button>;
