import { useUser } from "../context/userContext";
import photo from "../assets/photo.png";

const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 text-gray-600"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.61.07-.93s-.03-.63-.07-.93l2-1.56c.18-.14.23-.41.12-.61l-1.9-3.28c-.12-.22-.37-.3-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.8c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2 1.56c-.04.3-.07.62-.07.93s.03.63.07.93l-2 1.56c-.18.14-.23.41-.12.61l1.9 3.28c.12.22.37.3.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.8c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.9-3.28c.12-.21.07-.47-.12-.61l-2-1.56z" />
  </svg>
);

const UserProfile = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6 overflow-y-auto shadow-lg rounded-xl">
        <div className="bg-white">
          <h1 className="text-[18px] pb-5 pt-2">Account Settings</h1>
        </div>
        <div className="flex gap-5 py-5">
          <div className="relative">
            <img
              src={photo}
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
              <CameraIcon />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[15px] font-medium">{user?.fullname}</h1>
            <p className="text-[14px] text-gray-500">{user?.email}</p>
          </div>
        </div>
        <p className="text-[14px] pb-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <div className="border border-dashed border-gray-300 my-3"></div>
      </div>
    </div>
  );
};

export default UserProfile;
