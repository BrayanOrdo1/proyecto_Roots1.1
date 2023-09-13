<template>
    <div id="todo">
        <div class="Center">
            <div class="izquierda ">
                <h1 class="tex1">Advanture <br> Start here</h1>
                <p class="text2">Create and account to Join Our <br> community</p>
            </div>
            <div class="derecha">
                <v-img src="../assets/descarga.jpg" class="img1"></v-img>
                <p class="text3">¡Hello! Welcome back</p>
                <div class="login">
                    <v-form>
                        <div>
                            <p style="justify-content: left; display:flex; color:#504C4B; margin-bottom:2%;">Username</p>
                            <v-text-field placeholder="Username ">
                                <v-icon style="margin-right: 2%;">
                                    mdi mdi-account
                                </v-icon>
                            </v-text-field>
                        </div>
                        <div class="Password">
                            <p style="justify-content: left; display:flex; color:#504C4B; margin-bottom:2%;">Password</p>
                            <v-text-field type="password" placeholder="Password">
                                <v-icon style="margin-right: 2%;">
                                    mdi mdi-lock
                                </v-icon>
                            </v-text-field>
                        </div>
                        <v-checkbox label="Remember me"
                            style="margin-top: -7%; margin-bottom:-8%; color:black; font-size: 90%;"></v-checkbox>
                        <v-btn type="submit" block class="mt-2" style=" background-color:#5C7CF2; color:white;"
                        @click="menu">Login</v-btn>

                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login_1",
    data() {
        return {
        };
    },
    methods: {
        menu() {
            this.$router.push({ name: 'menu' });
        }
    }
}

</script>


<style>
#todo {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(90deg, #5C7CF2 50%, #e2e6f0 50%);
}

.Center {
    width: 1210px;
    height: 750px;
    background: linear-gradient(90deg, #6383FA 50%, #fff 50%);
    text-align: center;
    position: absolute;
    margin-top: 4%;
    border-radius: 6%;

}

.izquierda {
    background-image: url(../assets/Brayanasdhsdefsa.png);
    float: left;
    background-size: 100% 100%;
    position: relative;
    text-align: center;
    width: 50%;
    height: 100%;
    border-radius: 6%;

}

.tex1 {
    margin-top: 40%;
    color: white;
    font-family: var(--primary-font);
    font-size: 400%;
    font-style: normal;
    text-shadow: #fff;
    line-height: 1;

}

.text2 {
    color: white;
    font-family: var(--primary-font);
    font-size: 150%;
}

.derecha {
    float: right;
    width: 50%;
    height: 100%;
    position: relative;
}

.img1 {
    height: 11%;
    width: 13%;
    margin-left: 44%;
    margin-top: 12%;
    border-radius: 10%;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
}

.text3 {
    color: rgb(0, 0, 0);
    font-family: var(--primary-font);
    font-size: clamp(20px, 2vw, 22px);
    margin-top: 5%;
}


.login {
    height: 45%;
    width: 70%;
    margin: 0 auto;
    background-color: transparent;
    color: #5C7CF2;
    margin-top: 4%;
}

label,
input {
    float: left;

}
</style>