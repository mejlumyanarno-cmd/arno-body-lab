type WelcomeEmailInput = {
  fullName?: string | null;
  programTitle: string;
  loginUrl: string;
  email: string;
};

export function welcomeProgramEmail({
  fullName,
  programTitle,
  loginUrl,
  email
}: WelcomeEmailInput) {
  const name = fullName?.trim() || "Athlete";

  return {
    subject: "Добро пожаловать в Online Coaching",
    html: `
      <div style="margin:0;padding:32px;background:#050505;color:#f3f1ed;font-family:Arial,sans-serif">
        <div style="max-width:620px;margin:0 auto;border:1px solid rgba(255,255,255,.12);padding:32px;background:#0b0d0f">
          <p style="margin:0 0 12px;color:#c71f2d;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase">Online Coaching</p>
          <h1 style="margin:0 0 20px;font-size:34px;line-height:1;text-transform:uppercase">Добро пожаловать, ${name}</h1>
          <p style="font-size:16px;line-height:1.7;color:rgba(255,255,255,.72)">Твоя программа активирована: <strong style="color:#fff">${programTitle}</strong>.</p>
          <p style="font-size:16px;line-height:1.7;color:rgba(255,255,255,.72)">Аккаунт создан на email: <strong style="color:#fff">${email}</strong>. Войди в личный кабинет, открой сегодняшнюю тренировку, проверь питание и начни первый check-in.</p>
          <a href="${loginUrl}" style="display:inline-block;margin-top:24px;padding:16px 22px;background:#c71f2d;color:#fff;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase">Войти в личный кабинет</a>
          <div style="margin-top:30px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.55);font-size:14px;line-height:1.7">
            <strong style="color:#fff">Дальнейшие шаги:</strong><br/>
            1. Заполни стартовые данные.<br/>
            2. Загрузи первое фото прогресса.<br/>
            3. Выполни тренировку по календарю.<br/>
            4. Отправь check-in в конце недели.
          </div>
        </div>
      </div>
    `
  };
}
