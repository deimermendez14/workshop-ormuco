import style from "./styles.module.scss";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  Avatar,
  Box,
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Autocomplete,
} from "@mui/material";

import ComputerIcon from "@mui/icons-material/Computer";

import { CreateInstance } from "../../services/apiFetchData";
import { useFethData } from "../../hooks/useFetchData";

export const HomePage = () => {
  const { data } = useFethData();

  const { images, flavors, networks, segurityGroups, keyPairs } = data;

  const [values, setValues] = React.useState({
    name: "",
    image: "",
    network: "",
    segurityGroup: "",
    keyPair: "",
    flavor: "",
  });
  const { handleSubmit } = useForm();

  const handleChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className={style.container__content}>
        <Avatar className={style.container__avatar}>
          <ComputerIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create instance
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}></Box>
        <form onSubmit={handleSubmit(() => CreateInstance(values))}>
          <Grid container alignItems={"center"}>
            <Grid item lg={12} md={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Name instance"
                onChange={handleChange}
                sx={{ margin: 1 }}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Autocomplete
                className={style.container__input}
                disablePortal
                options={images.map((item) => {
                  return {
                    id: item.id,
                    label: item.name,
                  };
                })}
                fullWidth
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValues((prevState) => ({
                      ...prevState,
                      image: newValue != null ? newValue : null,
                    }));
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Images" required />
                )}
              />
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Autocomplete
                className={style.container__input}
                disablePortal
                options={networks.map((item) => {
                  return {
                    id: item.id,
                    label: item.name,
                  };
                })}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValues((prevState) => ({
                      ...prevState,
                      network: newValue != null ? newValue : null,
                    }));
                  }
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Networks" required />
                )}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Autocomplete
                className={style.container__input}
                disablePortal
                options={segurityGroups.map((item) => {
                  return {
                    id: item.id,
                    label: item.name,
                  };
                })}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValues((prevState) => ({
                      ...prevState,
                      segurityGroup: newValue != null ? newValue : null,
                    }));
                  }
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Segurity  groups" required />
                )}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Autocomplete
                className={style.container__input}
                disablePortal
                options={keyPairs.map((item) => {
                  return {
                    id: item.keypair.public_key,
                    label: item.keypair.name,
                  };
                })}
                fullWidth
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValues((prevState) => ({
                      ...prevState,
                      keyPair: newValue != null ? newValue : null,
                    }));
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Key pair " required />
                )}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Autocomplete
                className={style.container__input}
                disablePortal
                options={flavors.map((item) => {
                  return {
                    id: item.id,
                    label: item.name,
                  };
                })}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValues((prevState) => ({
                      ...prevState,
                      flavor: newValue != null ? newValue : null,
                    }));
                  }
                }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Flavors" required />
                )}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};
