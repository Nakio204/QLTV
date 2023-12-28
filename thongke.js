// Mảng dữ liệu
var data = [
    {maMuon: 'M01', maDocGia: 'DG1', ngayMuon: '11/11/2023', phiPhat: '100.000', maSach: 'S01', ngayTra: '11/12/2023'},
    {maMuon: 'M02', maDocGia: 'DG2', ngayMuon: '5/6/2023', phiPhat: '150.000', maSach: 'S02', ngayTra: '7/6/2023'},
    {maMuon: 'M03', maDocGia: 'DG3', ngayMuon: '13/4/2023', phiPhat: '130.000', maSach: 'S03', ngayTra: '13/5/2023'},
    {maMuon: 'M04', maDocGia: 'DG4', ngayMuon: '1/1/2023', phiPhat: '110.000', maSach: 'S04', ngayTra: '2/1/2023'},
    {maMuon: 'M05', maDocGia: 'DG5', ngayMuon: '6/7/2023', phiPhat: '0', maSach: 'S05', ngayTra: '7/7/2023'},
    {maMuon: 'M06', maDocGia: 'DG6', ngayMuon: '29/10/2023', phiPhat: '70.000', maSach: 'S06', ngayTra: '29/11/2023'},
    {maMuon: 'M07', maDocGia: 'DG7', ngayMuon: '23/12/2023', phiPhat: '0', maSach: 'S07', ngayTra: '1/1/2024'},
    {maMuon: 'M08', maDocGia: 'DG8', ngayMuon: '29/11/2023', phiPhat: '0', maSach: 'S08', ngayTra: '29/12/2023'},
    {maMuon: 'M09', maDocGia: 'DG9', ngayMuon: '3/3/2023', phiPhat: '55.000', maSach: 'S09', ngayTra: '3/4/2023'},
    {maMuon: 'M10', maDocGia: 'DG10', ngayMuon: '5/5/2023', phiPhat: '15.000', maSach: 'S10', ngayTra: '5/6/2023'},

  ];
  
  // Lấy tham chiếu đến phần tử tbody trong bảng
  var tbody = document.querySelector('.overdue-table');
  
  // Lặp qua mảng dữ liệu và tạo dòng và ô dữ liệu tương ứng
  data.forEach(function(item) {
    // Tạo một hàng mới trong bảng
    var newRow = document.createElement('tr');
  
    // Tạo các ô dữ liệu mới trong hàng
    var maMuonCell = document.createElement('td');
    maMuonCell.textContent = item.maMuon;
  
    var maDocGiaCell = document.createElement('td');
    maDocGiaCell.textContent = item.maDocGia;
  
    var ngayMuonCell = document.createElement('td');
    ngayMuonCell.textContent = item.ngayMuon;
  
    var phiPhatCell = document.createElement('td');
    phiPhatCell.textContent = item.phiPhat;
  
    var maSachCell = document.createElement('td');
    maSachCell.textContent = item.maSach;
  
    var ngayTraCell = document.createElement('td');
    ngayTraCell.textContent = item.ngayTra;
  
    // Thêm các ô dữ liệu mới vào hàng
    newRow.appendChild(maMuonCell);
    newRow.appendChild(maDocGiaCell);
    newRow.appendChild(ngayMuonCell);
    newRow.appendChild(phiPhatCell);
    newRow.appendChild(maSachCell);
    newRow.appendChild(ngayTraCell);
  
    // Thêm hàng vào tbody
    tbody.appendChild(newRow);
  });