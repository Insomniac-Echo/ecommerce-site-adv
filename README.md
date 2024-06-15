# ecommerce-site-adv

Frontend:
- HTML/CSS, Next.js

Backend:
- Python, Django, Django REST framework, MySQL

Дополнительно:

- Telegram API - Для обработки заказов(переадресация)

## Памятка
**Для теста работы проекта запускать нужно оба сервера**

Для работы с бэком:

1) Установить **pipenv**
2) В директории проекта прописать:
```bash
pipenv sync
```
подтянет все нужные зависимости из **pipfile**

4)  Для запуска венв субшелла
```bash
pipenv shell
```

5) Для запуска сервера
```bash
python manage.py runserver
```

Для работы с фронтом:

1) Доставить зависимость **axios**
```bash
npm install axios
```

2) Запустить дев сервер в корневой папке проекта
```bash
npm run dev
```


### P.S.
С этого момента можно уже разбить проект на две ветки, чтобы мы своими пушами тут всё не похерили
