import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "QLTC",
  password: "tanggiahan",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login/signup.ejs");
});

app.get("/main", async (req, res) => {
  res.render("user/main.ejs");
});

app.post("/main", async (req, res) => {
  res.render("user/main.ejs");
});

app.get("/login", (req, res) => {
  res.render("login/login.ejs");
});

// user/main.ejs
// staff/Staff_MainScreen.ejs

app.post("/login", (req, res) => {
  res.render("login/login.ejs");
});

app.post("/dologin", async (req, res) => {
  const username = req.body.username;
  const matkhau = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const dbpassword = user.matkhau;
      if (matkhau === dbpassword) {
        res.render("user/main.ejs", {
          username: user.username,
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

  const result = await db.query(
    "INSERT INTO users (username, hovaten, email, matkhau, sodienthoai) VALUES($1, $2, $3, $4, $5) RETURNING *;",
    [username, hovaten, email, matkhau, sodienthoai]
  );

  res.redirect("/login");
});

app.post("/signup", (req, res) => {
  res.render("login/signup.ejs");
});

app.post("/tiepnhansanh", (req, res) => {
  res.render("staff/lobby.ejs");
});

app.post("/thongtin", (req, res) => {
  res.render("staff/thongtin.ejs");
});

////////// BOOKING
app.get("/booking", async (req, res) => {
  try {
    const halls = await db.query("SELECT MaSanh, TenSanh FROM SANH WHERE TinhTrang = 'Còn phục vụ'");
    const shifts = await db.query("SELECT MaCa, TenCa, GioBatDau, GioKetThuc FROM CA WHERE TinhTrang = 'Còn phục vụ'");
    res.render("user/booking.ejs", { halls: halls.rows, shifts: shifts.rows });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/booking", async (req, res) => {
  const { groomName, brideName, phone, orderDate, eventDate, backupTables, hall, shift, deposit, numberOfTables } = req.body;

  try {
    // Kiểm tra ngày đãi tiệc phải lớn hơn ngày đặt tiệc
    if (new Date(eventDate) < new Date(orderDate)) {
      return res.status(400).send('Ngày đãi tiệc phải lớn hơn hoặc bằng ngày đặt tiệc.');
    }

    // Kiểm tra ca và sảnh vào ngày đãi tiệc còn trống không
    const checkQuery = `
      SELECT COUNT(*) FROM PHIEUDATTIEC
      WHERE MaSanh = $1 AND MaCa = $2 AND NgayDaiTiec = $3
    `;
    const checkResult = await db.query(checkQuery, [hall, shift, eventDate]);
    if (parseInt(checkResult.rows[0].count) > 0) {
      return res.status(400).send('Ca và sảnh vào ngày đãi tiệc đã được đặt.');
    }

    // Insert dữ liệu vào bảng PHIEUDATTIEC
    const insertQuery = `
      INSERT INTO PHIEUDATTIEC (
        TenChuRe, TenCoDau, SDT, NgayDatTiec, NgayDaiTiec, MaSanh, MaCa, TienDatCoc, SoLuongBan, SoBanDuTru
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING SoPhieuDatTiec
    `;
    const insertResult = await db.query(insertQuery, [
      groomName, brideName, phone, orderDate, eventDate, hall, shift, deposit, numberOfTables, backupTables,
    ]);
    const bookingId = insertResult.rows[0].sophieudattiec;

    res.redirect('/success');
  } catch (err) {
    console.error(err);
    res.status(500).send('Đã xảy ra lỗi trong quá trình đặt tiệc.');
  }
  res.render("user/booking.ejs");
});

// User - Look Up
app.post("/UserLookUp", (req, res) => {
  res.render("user/UserLookUp.ejs");
});
app.get("/UserLookUp", (req, res) => {
  res.render("user/UserLookUp.ejs");
});


app.listen(port, () => {
  console.log("listening on port " + port);
});

