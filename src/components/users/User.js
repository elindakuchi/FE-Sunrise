import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router";
import { UserContext } from "../../UserProvider";

const User = () => {
  const [users] = useContext(UserContext);
  let { id } = useParams();
  const USER = users.filter((user) => user.id === id)[0];
  return (
      <Card sx={{ margin: 20, padding: 2 }}>
        <CardContent>
          <Grid container spacing={3} sm={12}>
                <Grid item sm={3}>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600
                        }}
                    >
                    <Avatar
                        alt={USER.name.charAt(0)}
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                        sx={{ width: 120, height: 120, marginBottom: 2 }}
                    >
                        <Typography variant="h4">{USER.name.charAt(0).toUpperCase()}</Typography>
                    </Avatar>
                    <Typography variant="h6" style={{color: '#AD0F5B'}}>{USER.name}</Typography>
                    <Typography variant="subtitle1" style={{color: '#808080'}}>{USER.role}</Typography>
                    <Typography variant="subtitle1" >@{USER.team}</Typography>
                </div>
                </Grid>

                <Grid
                    item
                    sm={1}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Divider orientation="vertical" />
                </Grid>
                <Grid item sm={8}>
                    <Typography align="left" variant="h6">Bio</Typography>
                    <Divider orientation="horizontal" />
                    <Typography align="left" gutterBottom style={{color: '#808080'}}>
                        {USER.bio}
                    </Typography>
                <Grid container spacing={2}>
                    <Grid item sm={4}>
                        <Typography align="left" variant="h6">ID</Typography>
                        <Divider orientation="horizontal" />
                        <Typography align="left" style={{color: '#808080'}}>{USER.id}</Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography align="left" variant="h6">Group</Typography>
                        <Divider orientation="horizontal" />
                        <Typography align="left" style={{color: '#808080'}}>{USER.group}</Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography align="left" variant="h6">Team</Typography>
                        <Divider orientation="horizontal"/>
                        <Typography align="left" style={{color: '#808080'}}>{USER.team}</Typography>
                    </Grid>
                </Grid>
                </Grid>
              </Grid>
        </CardContent>
      </Card>
  );
};

export default User;
