import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const translations = {
    en: {
      signIn: "Sign In",
      welcome: "Welcome back! Please sign in to continue.",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      signingIn: "Signing in...",
      noAccount: "Don't have an account?",
      signUp: "Sign up"
    },
    id: {
      signIn: "Masuk",
      welcome: "Selamat datang kembali! Silakan masuk untuk melanjutkan.",
      email: "Email",
      emailPlaceholder: "Masukkan email Anda",
      password: "Kata Sandi",
      passwordPlaceholder: "Masukkan kata sandi Anda",
      signingIn: "Sedang masuk...",
      noAccount: "Belum punya akun?",
      signUp: "Daftar"
    },
    kk: {
      signIn: "Кіру",
      welcome: "Қайта келгеніңізге қуаныштымыз! Жалғастыру үшін кіріңіз.",
      email: "Email",
      emailPlaceholder: "Email енгізіңіз",
      password: "Құпия сөз",
      passwordPlaceholder: "Құпия сөзді енгізіңіз",
      signingIn: "Кіру...",
      noAccount: "Аккаунтыңыз жоқ па?",
      signUp: "Тіркелу"
    },
    hy: {
      signIn: "Մուտք",
      welcome: "Բարի վերադարձ! Խնդրում ենք մուտք գործել շարունակելու համար:",
      email: "Էլ. փոստ",
      emailPlaceholder: "Մուտքագրեք ձեր էլ. փոստը",
      password: "Գաղտնաբառ",
      passwordPlaceholder: "Մուտքագրեք ձեր գաղտնաբառը",
      signingIn: "Մուտք է գործում...",
      noAccount: "Չունե՞ք հաշիվ:",
      signUp: "Գրանցվել"
    },
    az: {
      signIn: "Daxil ol",
      welcome: "Xoş gəldiniz! Davam etmək üçün daxil olun.",
      email: "E-poçt",
      emailPlaceholder: "E-poçtunuzu daxil edin",
      password: "Şifrə",
      passwordPlaceholder: "Şifrənizi daxil edin",
      signingIn: "Daxil olunur...",
      noAccount: "Hesabınız yoxdur?",
      signUp: "Qeydiyyatdan keç"
    },
    vi: {
      signIn: "Đăng nhập",
      welcome: "Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục.",
      email: "Email",
      emailPlaceholder: "Nhập email của bạn",
      password: "Mật khẩu",
      passwordPlaceholder: "Nhập mật khẩu của bạn",
      signingIn: "Đang đăng nhập...",
      noAccount: "Chưa có tài khoản?",
      signUp: "Đăng ký"
    },
    tr: {
      signIn: "Giriş Yap",
      welcome: "Hoş geldiniz! Devam etmek için lütfen giriş yapın.",
      email: "E-posta",
      emailPlaceholder: "E-posta adresinizi girin",
      password: "Şifre",
      passwordPlaceholder: "Şifrenizi girin",
      signingIn: "Giriş yapılıyor...",
      noAccount: "Hesabınız yok mu?",
      signUp: "Kayıt ol"
    },
    nl: {
      signIn: "Inloggen",
      welcome: "Welkom terug! Log in om door te gaan.",
      email: "E-mail",
      emailPlaceholder: "Voer je e-mailadres in",
      password: "Wachtwoord",
      passwordPlaceholder: "Voer je wachtwoord in",
      signingIn: "Bezig met inloggen...",
      noAccount: "Nog geen account?",
      signUp: "Registreren"
    },
    ru: {
      signIn: "Войти",
      welcome: "С возвращением! Пожалуйста, войдите, чтобы продолжить.",
      email: "Электронная почта",
      emailPlaceholder: "Введите вашу почту",
      password: "Пароль",
      passwordPlaceholder: "Введите ваш пароль",
      signingIn: "Выполняется вход...",
      noAccount: "Нет аккаунта?",
      signUp: "Зарегистрироваться"
    },
    uk: {
      signIn: "Увійти",
      welcome: "З поверненням! Будь ласка, увійдіть, щоб продовжити.",
      email: "Електронна пошта",
      emailPlaceholder: "Введіть вашу пошту",
      password: "Пароль",
      passwordPlaceholder: "Введіть ваш пароль",
      signingIn: "Виконується вхід...",
      noAccount: "Немає облікового запису?",
      signUp: "Зареєструватися"
    },
    es: {
      signIn: "Iniciar Sesión",
      welcome: "¡Bienvenido de nuevo! Por favor, inicia sesión para continuar.",
      email: "Correo electrónico",
      emailPlaceholder: "Ingresa tu correo",
      password: "Contraseña",
      passwordPlaceholder: "Ingresa tu contraseña",
      signingIn: "Iniciando sesión...",
      noAccount: "¿No tienes una cuenta?",
      signUp: "Regístrate"
    },
    fr: {
      signIn: "Se Connecter",
      welcome: "Bon retour! Veuillez vous connecter pour continuer.",
      email: "E-mail",
      emailPlaceholder: "Entrez votre e-mail",
      password: "Mot de passe",
      passwordPlaceholder: "Entrez votre mot de passe",
      signingIn: "Connexion en cours...",
      noAccount: "Vous n'avez pas de compte ?",
      signUp: "S'inscrire"
    },
    de: {
      signIn: "Anmelden",
      welcome: "Willkommen zurück! Bitte melden Sie sich an, um fortzufahren.",
      email: "E-Mail",
      emailPlaceholder: "E-Mail eingeben",
      password: "Passwort",
      passwordPlaceholder: "Passwort eingeben",
      signingIn: "Anmeldung läuft...",
      noAccount: "Noch kein Konto?",
      signUp: "Registrieren"
    },
    "pt-BR": {
      signIn: "Entrar",
      welcome: "Bem-vindo de volta! Por favor, entre para continuar.",
      email: "E-mail",
      emailPlaceholder: "Digite seu e-mail",
      password: "Senha",
      passwordPlaceholder: "Digite sua senha",
      signingIn: "Entrando...",
      noAccount: "Não tem uma conta?",
      signUp: "Cadastre-se"
    },
    "pt-PT": {
      signIn: "Iniciar Sessão",
      welcome: "Bem-vindo de volta! Por favor, inicie sessão para continuar.",
      email: "E-mail",
      emailPlaceholder: "Introduza o seu e-mail",
      password: "Palavra-passe",
      passwordPlaceholder: "Introduza a sua palavra-passe",
      signingIn: "A iniciar sessão...",
      noAccount: "Não tem uma conta?",
      signUp: "Registar"
    },
    pl: {
      signIn: "Zaloguj się",
      welcome: "Witaj z powrotem! Zaloguj się, aby kontynuować.",
      email: "E-mail",
      emailPlaceholder: "Wprowadź swój e-mail",
      password: "Hasło",
      passwordPlaceholder: "Wprowadź swoje hasło",
      signingIn: "Logowanie...",
      noAccount: "Nie masz konta?",
      signUp: "Zarejestruj się"
    },
    cs: {
      signIn: "Přihlásit se",
      welcome: "Vítejte zpět! Pro pokračování se prosím přihlaste.",
      email: "E-mail",
      emailPlaceholder: "Zadejte svůj e-mail",
      password: "Heslo",
      passwordPlaceholder: "Zadejte své heslo",
      signingIn: "Přihlašování...",
      noAccount: "Nemáte účet?",
      signUp: "Zaregistrovat se"
    },
    "zh-CN": {
      signIn: "登录",
      welcome: "欢迎回来！请登录以继续。",
      email: "邮箱",
      emailPlaceholder: "请输入邮箱",
      password: "密码",
      passwordPlaceholder: "请输入密码",
      signingIn: "登录中...",
      noAccount: "还没有账号？",
      signUp: "注册"
    },
    "zh-TW": {
      signIn: "登入",
      welcome: "歡迎回來！請登入以繼續。",
      email: "電子郵件",
      emailPlaceholder: "請輸入電子郵件",
      password: "密碼",
      passwordPlaceholder: "請輸入密碼",
      signingIn: "登入中...",
      noAccount: "還沒有帳號？",
      signUp: "註冊"
    },
    ja: {
      signIn: "ログイン",
      welcome: "おかえりなさい！続けるにはログインしてください。",
      email: "メールアドレス",
      emailPlaceholder: "メールアドレスを入力",
      password: "パスワード",
      passwordPlaceholder: "パスワードを入力",
      signingIn: "ログイン中...",
      noAccount: "アカウントをお持ちでない方",
      signUp: "新規登録"
    }
  };

  const currentLang = localStorage.getItem("app-language") || "en";
  const t = translations[currentLang as keyof typeof translations] || translations.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-tiktok-gray text-white relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-2 text-gray-400 hover:text-white"
          onClick={handleGoBack}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <CardHeader>
          <CardTitle>{t.signIn}</CardTitle>
          <CardDescription className="text-gray-400">
            {t.welcome}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-tiktok-black border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.password}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-tiktok-black border-gray-700 text-white"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-tiktok-red hover:bg-red-700"
            >
              {loading ? t.signingIn : t.signIn}
            </Button>
            <p className="text-sm text-gray-400">
              {t.noAccount}{" "}
              <Link to="/signup" className="text-tiktok-blue hover:underline">
                {t.signUp}
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
