import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Typography } from '@mui/material';

const API_URL = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

export default function ExhibitionTable() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFiltered(json);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: '名稱', width: 250 },
    { field: 'location', headerName: '地點', width: 300 },
    { field: 'price', headerName: '票價', width: 150 },
  ];

  const rows = filtered.map((item, index) => ({
    id: index + 1,
    title: item.title,
    location: item.showInfo[0]?.location || '無資料',
    price: item.showInfo[0]?.price || '無資料',
  }));

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    setFiltered(data.filter(item =>
      item.title.toLowerCase().includes(keyword)
    ));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>
      <TextField
        label="名稱搜尋"
        variant="outlined"
        fullWidth
        value={search}
        onChange={handleSearch}
        sx={{ mb: 2 }}
      />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          pagination
        />
      </div>
    </Box>
  );
}
