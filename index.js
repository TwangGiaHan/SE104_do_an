import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

import session from "express-session";

const app = express();
const port = 3000;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "CNPM_QLTC",
  password: "tanggiahan",
  port: 5432,
});
// db.connect();
db.connect((err) => {
  if (err) {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", err);
  } else {
    console.log("Kết nối đến cơ sở dữ liệu thành công");
    // Bạn có thể thực hiện các thao tác khác tại đây
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("user/main.ejs");
});

// Staff_LobbyReception
// Staff_MainScreen

app.get("/main", async (req, res) => {
  res.render("user/main.ejs", {
    hovaten: "Nguyen Van Kha",
    email: "kha@gmail.com",
    name: "khanv",
    sdt: "kha123",
  });
});

app.post("/main", async (req, res) => {
  res.render("user/main.ejs");
});

app.get("/login", (req, res) => {
  res.render("login/login.ejs");
});

// staff thay doi quy dinh

// app.get("/", (req, res) => {
//   res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
// });

app.post("/thaydoiquydinh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/loaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/ca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/monan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/dichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/thamso", async (req, res) => {
  res.render("staff/thaydoiquydinh/thamso/ThayDoiThamSo.ejs");
});

app.post("/themloaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh_Them.ejs");
});

app.post("/xoaloaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh_Xoa.ejs");
});

app.post("/sualoaisanh", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh_Sua.ejs");
});

app.post("/themca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa_Them.ejs");
});

app.post("/xoaca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa_Xoa.ejs");
});

app.post("/suaca", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa_Sua.ejs");
});

app.post("/themmonan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn_Them.ejs");
});

app.post("/xoamonan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn_Xoa.ejs");
});

app.post("/suamonan", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn_Sua.ejs");
});

app.post("/themdichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu_Them.ejs");
});

app.post("/xoadichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu_Xoa.ejs");
});

app.post("/suadichvu", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu_Sua.ejs");
});

app.post("/themloaisanhngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/xoaloaisanhngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/sualoaisanhngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoisanh/ThayDoiLoaiSanh.ejs");
});

app.post("/themcangay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/xoacangay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/suacangay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoica/ThayDoiCa.ejs");
});

app.post("/themmonanngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/xoamonanngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/suamonanngay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoimonan/ThayDoiMonAn.ejs");
});

app.post("/themdichvungay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/xoadichvungay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/suadichvungay", async (req, res) => {
  res.render("staff/thaydoiquydinh/thaydoidichvu/ThayDoiDichVu.ejs");
});

app.post("/thaydoithamso", async (req, res) => {
  res.render("staff/thaydoiquydinh/thamso/ThayDoiThamSo_Sua.ejs");
});

// end staff thay doi quy dinh

// staff lobby

app.post("/updatelobby", async (req, res) => {
  res.render("staff/lobby/updatelobby.ejs");
});

app.post("/deletelobby", async (req, res) => {
  res.render("staff/lobby/deletelobby.ejs");
});

app.post("/createlobby", async (req, res) => {
  res.render("staff/lobby/createlobby.ejs");
});

app.post("/xacnhanxoasanh", async (req, res) => {
  res.render("staff/lobby/deletelobbydone.ejs");
});

// end staff lobby

// staff
// user/main.ejs
// staff/Staff_MainScreen.ejs

app.post("/login", (req, res) => {
  res.render("login/login.ejs");
});

app.post("/dologin", async (req, res) => {
  const username = req.body.username;
  const matkhau = req.body.password;

  try {
    const result = await db.query(
      "SELECT * FROM NGUOIDUNG WHERE TenDangNhap = $1",
      [username]
    );
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const dbpassword = user.matkhau;
      if (matkhau === dbpassword) {
        req.session.username = username;
        res.render("user/main.ejs", {
          name: user.username,
          email: user.email,
          hovaten: user.hovaten,
          sdt: user.sodienthoai,
        });
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/confirmchange", (req, res) => {
  res.render("user/confirmchange.ejs");
});

app.post("/dosignup", async (req, res) => {
  const hovaten = req.body.hovaten;
  const username = req.body.username;
  const email = req.body.email;
  const matkhau = req.body.matkhau;
  const sodienthoai = req.body.sodienthoai;

  try {
    const result = await db.query(
      "INSERT INTO NGUOIDUNG (TenDangNhap, TenNguoiDung, Email, MatKhau, SDT) VALUES($1, $2, $3, $4, $5) RETURNING *;",
      [username, hovaten, email, matkhau, sodienthoai]
    );

    res.render("login/login.ejs");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/signup", (req, res) => {
  res.render("login/signup.ejs");
});

app.post("/tiepnhansanh", (req, res) => {
  res.render("staff/lobby/lobby.ejs");
});

app.get("/tiepnhansanh", (req, res) => {
  res.render("staff/lobby/lobby.ejs");
});

app.post("/tracuu", (req, res) => {
  res.render("staff/tracuu/Staff_LookUp.ejs");
});

app.post("/lapbaocao", (req, res) => {
  res.render("staff/baocao/Staff_MonthlyReport.ejs");
});

let table_data = [
  {
    code: "HD01",
    order_number: "P001",
    lobby: "Bạch Kim I",
    booking_date: "10/3/2024",
    eating_date: "20/4/2024",
    status: "Chưa thanh toán",
  },
  {
    code: "HD02",
    order_number: "P002",
    lobby: "Bạch Kim II",
    booking_date: "15/3/2024",
    eating_date: "22/4/2024",
    status: "Chưa thanh toán",
  },
  {
    code: "HD03",
    order_number: "P003",
    lobby: "Bạch Kim III",
    booking_date: "10/4/2024",
    eating_date: "24/4/2024",
    status: "Đã thanh toán",
  },
  {
    code: "HD04",
    order_number: "P004",
    lobby: "Tinh Anh I",
    booking_date: "29/4/2024",
    eating_date: "15/5/2024",
    status: "Chưa thanh toán",
  },
  {
    code: "HD05",
    order_number: "P005",
    lobby: "Ruby I",
    booking_date: "10/5/2024",
    eating_date: "1/6/2024",
    status: "Đã thanh toán",
  },
];
app.post("/laphoadon", (req, res) => {
  res.render("staff/hoadon/Staff_ListBill.ejs", {
    table_data: table_data,
  });
});

app.post("/chitiethoadon", (req, res) => {
  res.render("staff/hoadon/Staff_ListBill_Unpaid.ejs", {
    table_data: table_data,
  });
});

app.post("/thongtin", (req, res) => {
  res.render("staff/staffinfo.ejs");
});

app.post("/adminmain", async (req, res) => {
  res.render("admin/main.ejs");
});

app.post("/deleteuser", async (req, res) => {
  res.render("admin/deleteuser.ejs");
});

app.post("/deleteuserdone", async (req, res) => {
  res.render("admin/deleteuserdone.ejs");
});

app.post("/updateuser", async (req, res) => {
  res.render("admin/updateuser.ejs");
});

app.post("/createuser", async (req, res) => {
  res.render("admin/createuser.ejs");
});

// user /////////////////////////////////////////////////////////////

app.post("/userinfo", async (req, res) => {
  res.render("user/main.ejs");
});

app.post("/userdichvu", async (req, res) => {
  res.render("user/dattiec/XoaDichVu.ejs");
});

app.post("/usertracuu", async (req, res) => {
  res.render("user/tracuu/UserLookUp.ejs");
});

// Thay đổi thông tin, mật khẩu
app.post("/changeinfo", async (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.render("user/changeinfo/changeinfo.ejs", { username: username });
});

app.post("/changepassword", async (req, res) => {
  const usernamepass = req.body.usernamepass;
  res.render("user/changeinfo/changepassword.ejs", {
    usernamepass: usernamepass,
  });
});

app.post("/confirminfochange", async (req, res) => {
  const hovaten = req.body.hovaten;
  const email = req.body.email;
  const sdt = req.body.sdt;
  const username = req.body.username;
  console.log(username);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(500).send("Email không đúng định dạng");
  }
  const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
  if (!phoneRegex.test(sdt)) {
    return res
      .status(500)
      .send("Số điện thoại không đúng định dạng của Việt Nam");
  }
  try {
    const result = await db.query(
      "UPDATE NGUOIDUNG SET tennguoidung = $1, email = $2, sdt = $3 WHERE tendangnhap = $4",
      [hovaten, email, sdt, username]
    );
    console.log(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
  res.render("user/changeinfo/confirminfochange.ejs", {
    hovaten: hovaten,
    email: email,
    sdt: sdt,
    username: username,
  });
});

app.post("/confirmpasschange", async (req, res) => {
  const currentPassword = req.body.currentPassword;
  const newPassword = req.body.newPassword;
  const confirmPassword = req.body.confirmPassword;
  const usernamepass = req.body.usernamepass;
  if (newPassword == currentPassword) {
    return res.status(400).send("New passwords do not match");
  }
  if (newPassword !== confirmPassword) {
    return res
      .status(400)
      .send("New passwords and confirmPassword are not the same thing.");
  }
  try {
    const result = await db.query(
      "SELECT MatKhau FROM NGUOIDUNG WHERE TenDangNhap = $1",
      [usernamepass]
    );
    if (result.rows.length > 0) {
      const user = result.rows[0];
      console.log(user);
      const dbpassword = user.matkhau;
      if (currentPassword === dbpassword) {
        await db.query(
          "UPDATE NGUOIDUNG SET MatKhau = $1 WHERE TenDangNhap = $2",
          [newPassword, usernamepass]
        );
      } else {
        return res.status(400).send("Current password is incorrect");
      }
    } else {
      return res.status(400).send("User not found");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
  res.render("user/changeinfo/confirmpasschange.ejs", {
    currentPassword: currentPassword,
    newPassword: newPassword,
    confirmPassword: confirmPassword,
    usernamepass: usernamepass,
  });
});

///////////////////////////////////////////////////
app.post("/logout", async (req, res) => {
  res.render("login/login.ejs");
});

app.get("/dattiec", async (req, res) => {
  try {
    const caResult = await db.query(
      "SELECT TenCa, GioBatDau, GioKetThuc FROM CA WHERE TinhTrang = 'Còn phục vụ'"
    );
    const caOptions = caResult.rows;
    const sanhResult = await db.query(
      "SELECT TenSanh FROM SANH WHERE TinhTrang = 'Còn phục vụ'"
    );
    const sanhOptions = sanhResult.rows;
    console.log(caOptions);

    const formData = {
      groomName: req.body.groomName,
      brideName: req.body.brideName,
      ca: req.body.ca,
      partyDate: req.body.partyDate,
      sanh: req.body.sanh,
      phone: req.body.phone,
      tableQuantity: req.body.tableQuantity,
      deposit: req.body.deposit,
      tableCount: req.body.tableCount,
      parameter: req.body.parameter,
    };

    const selectedItems = req.body.selectedItems || [];
    selectedItems.forEach((item) => {
      const quantity = parseInt(item.quantity);
      const unitPrice = parseFloat(item.itemPrice);
      const totalPrice =
        quantity * unitPrice * (req.body.tableQuantity + req.body.tableCount);
      item.totalPrice = totalPrice;
    });

    const selectedItemsDV = req.body.selectedItemsDV || [];
    selectedItemsDV.forEach((item) => {
      const quantityDV = parseInt(item.quantity);
      const unitPriceDV = parseFloat(item.itemPrice);
      const totalPriceDV =
        quantityDV *
        unitPriceDV *
        (req.body.tableQuantity + req.body.tableCount);
      item.totalPriceDV = totalPriceDV;
    });

    const ngayDatTiec = new Date();
    if (new Date(req.body.partyDate) < ngayDatTiec || isNaN(req.body.deposit)) {
      req.session.error = "Ngày đãi tiệc phải lớn hơn ngày đặt tiệc";
      return res.render("user/dattiec/dattiec.ejs");
    }

    req.session.formData = formData;
    req.session.caOptions = caOptions;
    req.session.sanhOptions = sanhOptions;
    req.session.selectedItems = selectedItems;
    req.session.selectedItemsDV = selectedItemsDV;
    req.session.error = null;

    res.render("user/dattiec/dattiec.ejs", {
      formData: caOptions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/dattiec", async (req, res) => {
  try {
    const caResult = await db.query(
      "SELECT TenCa, GioBatDau, GioKetThuc FROM CA WHERE TinhTrang = 'Còn phục vụ'"
    );
    const caOptions = caResult.rows;
    const sanhResult = await db.query(
      "SELECT TenSanh FROM SANH WHERE TinhTrang = 'Còn phục vụ'"
    );
    const sanhOptions = sanhResult.rows;
    console.log(caOptions);

    const formData = {
      groomName: req.body.groomName,
      brideName: req.body.brideName,
      ca: req.body.ca,
      partyDate: req.body.partyDate,
      sanh: req.body.sanh,
      phone: req.body.phone,
      tableQuantity: req.body.tableQuantity,
      deposit: req.body.deposit,
      tableCount: req.body.tableCount,
      parameter: req.body.parameter,
    };

    const selectedItems = req.body.selectedItems || [];
    selectedItems.forEach((item) => {
      const quantity = parseInt(item.quantity);
      const unitPrice = parseFloat(item.itemPrice);
      const totalPrice =
        quantity * unitPrice * (req.body.tableQuantity + req.body.tableCount);
      item.totalPrice = totalPrice;
    });

    const selectedItemsDV = req.body.selectedItemsDV || [];
    selectedItemsDV.forEach((item) => {
      const quantityDV = parseInt(item.quantity);
      const unitPriceDV = parseFloat(item.itemPrice);
      const totalPriceDV =
        quantityDV *
        unitPriceDV *
        (req.body.tableQuantity + req.body.tableCount);
      item.totalPriceDV = totalPriceDV;
    });

    const ngayDatTiec = new Date();
    if (new Date(req.body.partyDate) < ngayDatTiec || isNaN(req.body.deposit)) {
      req.session.error = "Ngày đãi tiệc phải lớn hơn ngày đặt tiệc";
      return res.redirect("/dattiec");
    }

    req.session.formData = formData;
    req.session.caOptions = caOptions;
    req.session.sanhOptions = sanhOptions;
    req.session.selectedItems = selectedItems;
    req.session.selectedItemsDV = selectedItemsDV;
    req.session.error = null;

    res.redirect("/dattiec");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/userthemmonan", async (req, res) => {
  try {
    // Truy vấn cơ sở dữ liệu để lấy danh sách món ăn còn phục vụ từ bảng MONAN
    const monanResult = await db.query(
      "SELECT * FROM MONAN WHERE TinhTrang = 'Còn phục vụ'"
    );
    const monanOptions = monanResult.rows;
    // Render màn hình themmonan và truyền danh sách món ăn
    res.render("user/dattiec/themmonan.ejs", { monanOptions: monanOptions });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/userthemdichvu", async (req, res) => {
  try {
    const dichvuResult = await db.query(
      "SELECT * FROM DICHVU WHERE TinhTrang = 'Còn phục vụ'"
    );
    const dichvuOptions = dichvuResult.rows;
    res.render("user/dattiec/themdichvu.ejs", { dichvuOptions: dichvuOptions });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/userxoamonan", async (req, res) => {
  res.render("user/dattiec/XoaMonAn.ejs");
});

app.post("/userxoamonan", async (req, res) => {
  const mamonan = req.body.ItemId;
  console.log(mamonan);
  res.render("user/dattiec/XoaMonAn.ejs");
});

app.post("/userxoamonan", async (req, res) => {
  const itemId = req.body.itemId;
  const confirm = req.body.confirm;

  if (confirm === "yes") {
    const indexToRemove = selectedItems.findIndex((item) => item.id === itemId);
    if (indexToRemove !== -1) {
      selectedItems.splice(indexToRemove, 1);
      res.render("user/dattiec/dattiec.ejs", {
        caOptions: caOptions,
        sanhOptions: sanhOptions,
        selectedItems: selectedItems,
        selectedItemsDV: selectedItemsDV,
        formData: req.body, // Truyền lại formData nếu cần
      });
    } else {
      res.status(404).send("Món ăn không tồn tại trong danh sách.");
    }
  } else {
    // Nếu người dùng không xác nhận xóa, quay lại trang /dattiec mà không thực hiện bất kỳ hành động nào
    res.redirect("/dattiec");
  }
});

app.post("/userxoadichvu", async (req, res) => {
  const itemId = req.body.itemId;
  const confirmDV = req.body.confirmDV;

  if (confirmDV === "yes") {
    const indexToRemove = selectedItemsDV.findIndex(
      (item) => item.id === itemId
    );
    if (indexToRemove !== -1) {
      selectedItemsDV.splice(indexToRemove, 1);
      res.render("user/dattiec/dattiec.ejs", {
        caOptions: caOptions,
        sanhOptions: sanhOptions,
        selectedItems: selectedItems,
        selectedItemsDV: selectedItemsDV,
        formData: req.body, // Truyền lại formData nếu cần
      });
    } else {
      res.status(404).send("Dịch vụ không tồn tại trong danh sách.");
    }
  } else {
    // Nếu người dùng không xác nhận xóa, quay lại trang /dattiec mà không thực hiện bất kỳ hành động nào
    res.redirect("/dattiec");
  }
});

app.post("/xacnhandattiec", async (req, res) => {
  const confirmDT = req.body.confirmDT;

  if (confirmDT === "yes") {
    const formData = req.session.formData;
    const selectedItems = req.session.selectedItems;
    const selectedItemsDV = req.session.selectedItemsDV;

    const donGiaBanResult = await db.query(
      "SELECT DonGiaBanToiThieu FROM LOAISANH ls JOIN SANH s ON s.MaLoaiSanh = ls.MaLoaiSanh WHERE s.TenSanh = $1",
      [formData.sanh]
    );
    const donGiaBan = donGiaBanResult.rows[0].dongiabantoithieu;

    const masanhResult = await db.query(
      "SELECT MaSanh FROM SANH WHERE TenSanh = $1",
      [formData.sanh]
    );
    const masanh = masanhResult.rows[0].masanh;

    const macaResult = await db.query("SELECT MaCa FROM CA WHERE TenCa = $1", [
      formData.ca,
    ]);
    const maca = macaResult.rows[0].maca;

    const tongTienBan =
      donGiaBan * (formData.tableQuantity + formData.tableCount);
    const ngayDatTiec = new Date();
    // INSERT into PHIEUDATTIEC
    const insertPhieuQuery = `
      INSERT INTO PHIEUDATTIEC (TenChuRe, TenCoDau, SDT, NgayDatTiec, NgayDaiTiec, MaSanh, MaCa, TienDatCoc, SoLuongBan, SoBanDuTru, DonGiaBan, TongTienBan)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING MaPhieu
    `;
    const valuesPhieu = [
      formData.groomName,
      formData.brideName,
      formData.phone,
      ngayDatTiec,
      formData.partyDate,
      masanh,
      maca,
      formData.deposit,
      formData.tableQuantity,
      formData.tableCount,
      donGiaBan,
      tongTienBan,
    ];
    const phieuResult = await db.query(insertPhieuQuery, valuesPhieu);
    const maPhieu = phieuResult.rows[0].maphieu;
  }
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
