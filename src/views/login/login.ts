import { Component, Vue, Watch } from "vue-property-decorator";
import { ElForm } from "element-ui/types/form";
import { ElInput } from "element-ui/types/input";

const validatePwd = (rule: any, value: string, callback: Function) => {
    if (value.length < 4) {
        callback(new Error('密码不能少于4位。'));
    }
    else {
        callback();
    }
};

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
        username: [{ required: true, trigger: 'blur', message: '请填写用户名' }],
        pwd: [{ required: true, trigger: 'blur', message: '请至少填写4位密码', validator: validatePwd }]
    };

    private redirect: string | undefined = undefined;

    @Watch('$route', { immediate: true })
    private onRouteChange(route: Route) {
        this.redirect = route.query && route.query.redirect as string;
    }

    private mounted() {
        if (this.loginForm.username === '') {
            this.$refs.username.focus();
        }
        else if (this.loginForm.pwd === '') {
            this.$refs.pwd.focus();
        }
    }

    private login(): void {
        (this.$refs.loginFormEl).validate(async (valid) => {
            if (valid) {
                return true;
            }
            else {
                console.log('login validate failure.');
                return false;
            }
        });
    }

    private register(): void {

    }
}