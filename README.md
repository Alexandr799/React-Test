# Тестовое приложение а-ля Hello World React



Приложение выполнено на React

* Приложение позволяет просматривать список пользователей и подробную информацию о них с фейкового апи resreq.in
* Так как приложение работает с фейковым апи reqres.in, зарегистрироваться можно только по данным : "email": "eve.holt@reqres.in", "password": "pistol"
* Войти также можно  по следюущим данным :  "email": "eve.holt@reqres.in", "password": "cityslicka"

### У приложения по сути 4 страницы:
1. Форма авторизации - /
2. Форма регистрации - /registration
3. Главная страница со списком пользователей и пагинацией /team
4. Страница с подробной информацией по пользователе /user/:id

Если вы авторизированы (то есть токен сохранен в localStorige), значит вы автоматически при переходе на главную попадаете на страницу /team
Если не авторизированы значит любая страница внутри приложения переадресовывает на страницу с авторизацией

В сервисе reqres при запросах не валидируется токен, в реальном приложнии конечно нужно при каждом запросе его отправлять. 

### Развертывание
* Запуск приложение в режиме девелопера команда `$ npm start` в корне приложения
* Для создания билда `$ npm run build` билд появится в папке build

* Для запуска билда в папке сервер введите в консоли команду npm start



