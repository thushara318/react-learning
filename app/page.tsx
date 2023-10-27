"use client"
import { Button, TextField } from '@mui/material'
import styles1 from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter()
  const goToHome = () => {
  return router.push('/home');
  };
  return (
    <main>
      <div className={styles1.FlexContainer}>
        <div >
          <h1>Login</h1>
        </div>
        <div>
          <div className={styles1.ContainerPadding}>Email</div>

          <TextField id="outlined-basic" variant="outlined" />
        </div>
        <div>
          <div className={styles1.ContainerPadding}>Password</div>
          <TextField id="outlined-basic" variant="outlined" />
        </div>
        <div>
          <Button variant="contained">Login</Button>
        </div>
        <div>
          <Button variant="contained" onClick={goToHome}>Next Page</Button>
        </div>
      </div>
    </main>
  )
}
