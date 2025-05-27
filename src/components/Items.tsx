import { useEffect, useState } from 'react';

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://obn2yom3y1.execute-api.ap-southeast-2.amazonaws.com/dev')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setItems(data["Item"]["Full Name"]["S"]);
        setLoading(false);
      })
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
    <li>{items}</li>
    </ul>
  );
}

export default Items;