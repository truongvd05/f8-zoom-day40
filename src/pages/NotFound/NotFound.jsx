import { NavLink } from "react-router";
import style from './NotFound.module.scss'
function NotFound() {
    return (
    <div className={style.container}>
      <h1 className="text-9xl font-bold text-gray-700">404</h1>
      <h2 className="text-2xl mt-4">Trang bạn tìm không tồn tại</h2>
      <p className="mt-2 text-gray-500">Có thể đường dẫn bị sai hoặc trang đã bị xóa.</p>
      <NavLink
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Quay về trang chủ
      </NavLink>
    </div>
  );
}

export default NotFound;