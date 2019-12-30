import { Component, Vue } from "vue-property-decorator";
import { ElForm } from "element-ui/types/form";
import { ElInput } from "element-ui/types/input";

@Component({
    name: "Login"
})
export default class Login extends Vue {
    $refs!: {
        loginFormEl: ElForm;
        username: ElInput;
        pwd: ElInput;
    };

    private loginForm = {
        username: 'admin',
        pwd: '111'
    };

    private rules = {
        username: [{ required: true, trigger: 'blur' }],
        pwd: [{ required: true, trigger: 'blur' }]
    };

    private mounted() {
        if (this.loginForm.username === '') {
            this.$refs.username.focus();
        }
        else if (this.loginForm.pwd === '') {
            this.$refs.pwd.focus();
        }
    }

}