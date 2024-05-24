import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
// import { check, validationResult } from "express-validator"; // thêm

const app = express();
const port = 3000;

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
    console.error('Không thể kết nối đến cơ sở dữ liệu:', err);
  } else {
    console.log('Kết nối đến cơ sở dữ liệu thành công');
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
  res.render("user/main.ejs");
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
    const result = await db.query("SELECT * FROM NGUOIDUNG WHERE TenDangNhap = $1", [
      username,
    ]);
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

// user

app.post("/userinfo", async (req, res) => {
  res.render("user/main.ejs");
});

app.post("/userxoamonan", async (req, res) => {
  res.render("user/dattiec/XoaMonAn.ejs");
});

app.post("/userdichvu", async (req, res) => {
  res.render("user/dattiec/XoaDichVu.ejs");
});

app.post("/xacnhandattiec", async (req, res) => {
  res.render("user/dattiec/XacNhanDatTiec.ejs");
});

app.post("/usertracuu", async (req, res) => {
  res.render("user/tracuu/UserLookUp.ejs");
});

// Thay đổi thông tin, mật khẩu
app.post("/changeinfo", async (req, res) => {
  res.render("user/changeinfo/changeinfo.ejs");
});

app.post("/changepassword", async (req, res) => {
  res.render("user/changeinfo/changepassword.ejs");
});

app.post("/confirminfochange", async (req, res) => {
  res.render("user/changeinfo/confirminfochange.ejs");
});

app.post("/confirmpasschange", async (req, res) => {
  res.render("user/changeinfo/confirmpasschange.ejs");
});

app.post("/logout", async (req, res) => {
  res.render("login/login.ejs");
});

app.post("/confirminfochange", async (req, res) => {
  const {hovaten, email, sdt} = req.body;
  let errors = []
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push({ msg: "Email không đúng định dạng" });
  }
  const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
  if (!phoneRegex.test(sdt)) {
    errors.push({ msg: "Số điện thoại không đúng định dạng của Việt Nam" });
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const query = `
    UPDATE NGUOIDUNG 
    SET TenNguoiDung = $1, Email = $2, SDT = $3 
    WHERE TenDangNhap = $4
  `;
  try {
    await db.query(query, [hovaten, email, sdt, req.session.username]);
    res.redirect('/main');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post("/changepassword", async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  if (newPassword !== confirmPassword) {
    return res.status(400).send("New passwords do not match");
  }

  try {
    const result = await db.query("SELECT MatKhau FROM NGUOIDUNG WHERE TenDangNhap = $1", [req.session.username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const dbpassword = user.matkhau;

      if (currentPassword === dbpassword) {
        const updateQuery = "UPDATE NGUOIDUNG SET MatKhau = $1 WHERE TenDangNhap = $2";
        await db.query(updateQuery, [newPassword, req.session.username]);
        res.redirect('/main');
      } else {
        res.status(400).send("Current password is incorrect");
      }
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/main", async (req, res) => {
  const query = `
    SELECT TenNguoiDung AS hovaten, Email AS email, SDT AS sdt
    FROM NGUOIDUNG 
    WHERE TenDangNhap = $1  
  `;
  try {
    const result = await db.query(query, [req.session.username]);
    const userInfo = result.rows[0];
    res.render('user/main.ejs', {
      hovaten: userInfo.hovaten,
      email: userInfo.email,
      sdt: userInfo.sdt
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post("/dattiec", async (req, res) => {
  const groomName = req.body.groomName;
  const brideName = req.body.brideName;
  const ca = req.body.ca;
  const ngayDaiTiec = req.body.partyDate;
  const sanh = req.body.sanh;
  const phone = req.body.phone;
  const slban = req.body.tableQuantity;
  const tiendatdoc = req.body.deposit;
  const bandutru = req.body.tableCount;
  const thamso = req.body.parameter;
  
  try {
    // Truy vấn lấy thông tin về ca
    const caResult = await db.query("SELECT TenCa, GioBatDau, GioKetThuc FROM CA WHERE TinhTrang = 'Còn phục vụ'");
    const caOptions = caResult.rows;

    // Truy vấn lấy thông tin về sảnh
    const sanhResult = await db.query("SELECT TenSanh FROM SANH WHERE TinhTrang = 'Còn phục vụ'");
    const sanhOptions = sanhResult.rows;

    // Tính toán thông tin món ăn
    const selectedItems = req.body.selectedItems;
    selectedItems.forEach(item => {
      const quantity = parseInt(item.quantity);
      const unitPrice = parseFloat(item.itemPrice);
      const totalPrice = quantity * tableQuantity * unitPrice;
      item.totalPrice = totalPrice;
    });
    const selectedItemsDV = req.body.selectedItemsDV;
    selectedItemsDV.forEach(item => {
      const quantity = parseInt(item.quantity);
      const unitPrice = parseFloat(item.itemPrice);
      const totalPrice = quantity * tableQuantity * unitPrice;
      item.totalPrice = totalPrice;
    });

    const ngayDatTiec = new Date(); // Ngày đặt tiệc là ngày hiện tại
    if (ngayDaiTiec < ngayDatTiec || isNaN(tiendatdoc) || tiendatdoc < 0){
      return res.render("user/dattiec/dattiec.ejs", { 
        caOptions: caOptions, 
        sanhOptions: sanhOptions,
        error: "Ngày đãi tiệc phải lớn hơn ngày đặt tiệc và tiền đặt cọc phải là một số dương"
      });
    }
    // Render màn hình đặt tiệc cưới và truyền các tùy chọn ca và sảnh
    res.render("user/dattiec/dattiec.ejs", { 
      caOptions: caOptions, 
      sanhOptions: sanhOptions,
      selectedItems: selectedItems,
      selectedItemsDV: selectedItems

    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  } 
});

app.post("/userthemmonan", async (req, res) => {
  try {
    // Truy vấn cơ sở dữ liệu để lấy danh sách món ăn còn phục vụ từ bảng MONAN
    const monanResult = await db.query("SELECT * FROM MONAN WHERE TinhTrang = 'Còn phục vụ'");
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
    const dichvuResult = await db.query("SELECT * FROM DICHVU WHERE TinhTrang = 'Còn phục vụ'");
    const dichvuOptions = dichvuResult.rows;
    res.render("user/dattiec/themdichvu.ejs", { dichvuOptions: dichvuOptions });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/dattiec", async (req, res) => {
  const selectedItems = req.body.selectedItems; // Nhận mảng selectedItems từ request POST
  const selectedItemsDV = req.body.selectedItemsDV;
  let totalPriceMA = 0;
  let totalPriceDV = 0;
  selectedItems.forEach(item => {
    totalQuantity += item.quantity;
    totalPriceMA += item.totalPrice;
  });
  res.render("user/dattiec/dattiec.ejs", { selectedItems: selectedItems });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
