import Card from '@mui/material/Card';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
export default function InfoBox({newinfo}){
    const  init_image="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const hot_url="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=612x612&w=0&k=20&c=xjTI4-8fgT1a1K6IDSbVqzLbv6kSNpEQWRU5vFt03Xs=";
    const cold_url="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const rain_url="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=is&k=20&c=sEtg3kiGcREzfi0k_FWwv81Edp9sEs18NtNPJltDLBY=";
   
    return (
        <div><h3>Weather Info - {newinfo.weather}</h3>
       
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={newinfo.humidity>70 ? rain_url : newinfo.temp >15 ?hot_url :cold_url}
         title="green iguana"
      
      
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         
         {newinfo.city}    &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp; {newinfo.humidity>70 ? <ThunderstormIcon></ThunderstormIcon> : newinfo.temp >15 ? <WbSunnyIcon></WbSunnyIcon>:<SevereColdIcon></SevereColdIcon>}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary'  component={"span"}>
         <p>Temperature ={newinfo.temp}&deg; C </p>
             <p>Humidity ={newinfo.humidity}</p>
             <p>Min Temp = {newinfo.tempMin}&deg; C</p>
            <p>Max Temp = {newinfo.tempMax}&deg; C</p>
            <p>The weather  feels like {newinfo.feels_like}</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    );

}