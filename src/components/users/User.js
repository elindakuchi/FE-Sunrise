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
          <Grid container spacing={3}>
            <Grid item sm={2.5}>
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                >
                <Avatar
                  alt={USER.name.charAt(0)}
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  sx={{ width: 100, height: 100, marginBottom: 2 }}
                >
                    {USER.name.charAt(0).toUpperCase()}
                </Avatar>
                <Typography>{USER.name}</Typography>
                <Typography>{USER.role}</Typography>
                <Typography>@{USER.team}</Typography>
              </div>
            </Grid>
            <Grid
              item
              sm={0.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Divider orientation="vertical" />
            </Grid>
            <Grid item sm={9}>
              <div style={{ textAlign: "left", fontWeight: 600 }}>Bio</div>
              <Divider orientation="horizontal" />
              <p style={{ textAlign: "left"}}>
               {USER.bio}
              </p>
              <Grid container spacing={2} style={{ textAlign: "left" }}>
                <Grid item sm={4}>
                  <div style={{ fontWeight: 600 }}>ID</div>
                  <Divider orientation="horizontal" />
                  <p>{USER.id}</p>
                </Grid>
                <Grid item sm={4}>
                  <div style={{ fontWeight: 600 }}>Group</div>
                  <Divider orientation="horizontal" />
                  <p>{USER.group}</p>
                </Grid>
                <Grid item sm={4}>
                  <div style={{ fontWeight: 600 }}>Team</div>
                  <Divider orientation="horizontal" />
                  <p>{USER.team}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
};

export default User;
