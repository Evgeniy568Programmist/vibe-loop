import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const translations = {
    en: {
      createAccount: "Create Account",
      joinCommunity: "Join our community today!",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "Choose a password",
      creatingAccount: "Creating account...",
      haveAccount: "Already have an account?",
      signIn: "Sign in"
    },
    vi: {
      createAccount: "Tạo tài khoản",
      joinCommunity: "Tham gia cộng đồng của chúng tôi ngay hôm nay!",
      email: "Email",
      emailPlaceholder: "Nhập email của bạn",
      password: "Mật khẩu",
      passwordPlaceholder: "Chọn mật khẩu",
      creatingAccount: "Đang tạo tài khoản...",
      haveAccount: "Đã có tài khoản?",
      signIn: "Đăng nhập"
    },
    tr: {
      createAccount: "Hesap Oluştur",
      joinCommunity: "Topluluğumuza bugün katılın!",
      email: "E-posta",
      emailPlaceholder: "E-posta adresinizi girin",
      password: "Şifre",
      passwordPlaceholder: "Bir şifre seçin",
      creatingAccount: "Hesap oluşturuluyor...",
      haveAccount: "Zaten hesabınız var mı?",
      signIn: "Giriş yap"
    },
    nl: {
      createAccount: "Account Aanmaken",
      joinCommunity: "Word vandaag lid van onze community!",
      email: "E-mail",
      emailPlaceholder: "Voer je e-mailadres in",
      password: "Wachtwoord",
      passwordPlaceholder: "Kies een wachtwoord",
      creatingAccount: "Account wordt aangemaakt...",
      haveAccount: "Heb je al een account?",
      signIn: "Inloggen"
    },
    ru: {
      createAccount: "Создать аккаунт",
      joinCommunity: "Присоединяйтесь к нашему сообществу!",
      email: "Электронная почта",
      emailPlaceholder: "Введите вашу почту",
      password: "Пароль",
      passwordPlaceholder: "Выберите пароль",
      creatingAccount: "Создание аккаунта...",
      haveAccount: "Уже есть аккаунт?",
      signIn: "Войти"
    },
    uk: {
      createAccount: "Створити обліковий запис",
      joinCommunity: "Приєднуйтесь до нашої спільноти!",
      email: "Електронна пошта",
      emailPlaceholder: "Введіть вашу пошту",
      password: "Пароль",
      passwordPlaceholder: "Виберіть пароль",
      creatingAccount: "Створення облікового запису...",
      haveAccount: "Вже є обліковий запис?",
      signIn: "Увійти"
    },
    es: {
      createAccount: "Crear Cuenta",
      joinCommunity: "¡Únete a nuestra comunidad hoy!",
      email: "Correo electrónico",
      emailPlaceholder: "Ingresa tu correo",
      password: "Contraseña",
      passwordPlaceholder: "Elige una contraseña",
      creatingAccount: "Creando cuenta...",
      haveAccount: "¿Ya tienes una cuenta?",
      signIn: "Iniciar sesión"
    },
    fr: {
      createAccount: "Créer un Compte",
      joinCommunity: "Rejoignez notre communauté aujourd'hui !",
      email: "E-mail",
      emailPlaceholder: "Entrez votre e-mail",
      password: "Mot de passe",
      passwordPlaceholder: "Choisissez un mot de passe",
      creatingAccount: "Création du compte...",
      haveAccount: "Vous avez déjà un compte ?",
      signIn: "Se connecter"
    },
    de: {
      createAccount: "Konto erstellen",
      joinCommunity: "Werden Sie noch heute Teil unserer Community!",
      email: "E-Mail",
      emailPlaceholder: "E-Mail eingeben",
      password: "Passwort",
      passwordPlaceholder: "Passwort wählen",
      creatingAccount: "Konto wird erstellt...",
      haveAccount: "Bereits ein Konto?",
      signIn: "Anmelden"
    },
    "pt-BR": {
      createAccount: "Criar Conta",
      joinCommunity: "Junte-se à nossa comunidade hoje!",
      email: "E-mail",
      emailPlaceholder: "Digite seu e-mail",
      password: "Senha",
      passwordPlaceholder: "Escolha uma senha",
      creatingAccount: "Criando conta...",
      haveAccount: "Já tem uma conta?",
      signIn: "Entrar"
    },
    "pt-PT": {
      createAccount: "Criar Conta",
      joinCommunity: "Junte-se à nossa comunidade hoje!",
      email: "E-mail",
      emailPlaceholder: "Introduza o seu e-mail",
      password: "Palavra-passe",
      passwordPlaceholder: "Escolha uma palavra-passe",
      creatingAccount: "A criar conta...",
      haveAccount: "Já tem uma conta?",
      signIn: "Iniciar sessão"
    },
    pl: {
      createAccount: "Utwórz Konto",
      joinCommunity: "Dołącz do naszej społeczności już dziś!",
      email: "E-mail",
      emailPlaceholder: "Wprowadź swój e-mail",
      password: "Hasło",
      passwordPlaceholder: "Wybierz hasło",
      creatingAccount: "Tworzenie konta...",
      haveAccount: "Masz już konto?",
      signIn: "Zaloguj się"
    },
    cs: {
      createAccount: "Vytvořit účet",
      joinCommunity: "Připojte se k naší komunitě ještě dnes!",
      email: "E-mail",
      emailPlaceholder: "Zadejte svůj e-mail",
      password: "Heslo",
      passwordPlaceholder: "Zvolte si heslo",
      creatingAccount: "Vytváření účtu...",
      haveAccount: "Již máte účet?",
      signIn: "Přihlásit se"
    },
    "zh-CN": {
      createAccount: "创建账号",
      joinCommunity: "立即加入我们的社区！",
      email: "邮箱",
      emailPlaceholder: "请输入邮箱",
      password: "密码",
      passwordPlaceholder: "请设置密码",
      creatingAccount: "创建账号中...",
      haveAccount: "已有账号？",
      signIn: "登录"
    },
    "zh-TW": {
      createAccount: "建立帳號",
      joinCommunity: "立即加入我們的社群！",
      email: "電子郵件",
      emailPlaceholder: "請輸入電子郵件",
      password: "密碼",
      passwordPlaceholder: "請設定密碼",
      creatingAccount: "建立帳號中...",
      haveAccount: "已有帳號？",
      signIn: "登入"
    },
    "ja": {
      createAccount: "アカウント作成",
      joinCommunity: "コミュニティに参加しましょう！",
      email: "メールアドレス",
      emailPlaceholder: "メールアドレスを入力",
      password: "パスワード",
      passwordPlaceholder: "パスワードを設定",
      creatingAccount: "アカウント作成中...",
      haveAccount: "すでにアカウントをお持ちの方",
      signIn: "ログイン"
    }
  };

  const currentLang = localStorage.getItem("app-language") || "en";
  const t = translations[currentLang as keyof typeof translations] || translations.en; // Added fallback to English

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signUp(email, password);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing up:", error);
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
          <CardTitle>{t.createAccount}</CardTitle>
          <CardDescription className="text-gray-400">
            {t.joinCommunity}
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
              {loading ? t.creatingAccount : t.createAccount}
            </Button>
            <p className="text-sm text-gray-400">
              {t.haveAccount}{" "}
              <Link to="/signin" className="text-tiktok-blue hover:underline">
                {t.signIn}
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
