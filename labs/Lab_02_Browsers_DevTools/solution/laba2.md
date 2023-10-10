### Лабораторная №2
### Задание №1
1. Значение каждого заголовка

Request URL:https://ya.ru/ - единообразный идентификатор ресурса, который идентифицирует ресурс запроса

Request method:GET - метод который показывает через что происходит запрос

Status Code:200 - сервер получил запрос, и конкретно его обработал

Remote Address:[2a02:6b8::2:242]:443 - ip адрес который мы получили

Referrer Policy:no-referrer-when-downgrade - говорит о переходе с одного сайта на другой, здесь означает что не будет отправлено разрешение с перехода от https на htpp, но будет полная ссылка при переходе с http куда-то ещё

content-type:text/html; charset=UTF-8 - тип контента текст и html, формат преобразования юникода 8 бит

cache-control:no-cache,no-store,max-age=0,must-revalidate - контроль кэша, ресурсы которые надо проверять при каждом входе на сервере, ресурсы которые никогда не надо проверять, максимальный размер, сообщает кэшу что он должен подчиняться любой свежей информации которую предоставляет ему сервер

cookie:is_gdpr=0; is_gdpr_b=COj6IhD+zQEoAg==; yandex_csyr=1694518204; yandex_login=; i=9oVX3QdPu26qfoBBZnqhTgUko1OzZhCHq+pV2Fhsn20ByKg16PTB4JE+iD16VVDExpQpdWufQTgU+ZXWVx3mBqLG8j8=; yandexuid=4078262061692381289; mda2_beacon=1694518205836; _ym_uid=1694518216258268412; spravka=.../MA==; gdpr=0; _yasc=FCkm4SNS0HIElDOgeF2BgmCK2YvQTwOfF7M8vaCvF6xzFUa3Rm/OJ8M0uViOd6ZL5N0sgDdKIk6Hxp/oxWQ=; yp=1697110254.ygu.1#4294967295.skin.s#1710891093.szm.1_25:1536x864:1536x747#1697801503.csc.1 - данные которые сервер отправляет браузеру, логин от браузера, поддерживают состояние сессии, пишет о некоторых известных в данном браузере данных пользователя

user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 - говорит через какой браузер был сделан запрос, данные о версии ос, битовая информация, также определяет тип приложения

referer:https://github.com/CITG-Space-Pet/web_lab_aib_frontend/blob/main/labs/Lab_02_Browsers_DevTools/Task.md - через что был сделан запрос

2. Части Remote Address

Из двух частей, номера сети и номера узла

3. Что означает порт подключения?

То расширение которое позволяет всей информации переходить из одного компа на другой через ip. сетевые порты нужны для приема и передачи данных определенного вида, и устранение ошибок неоднозначности при попытке установить связь с хостом по ip

4. На какие секции разделены все заголовки?Какой смысл у каждой секции?

General Headers (рус. Общие заголовки) — используются в запросах и ответах.
Request Headers (рус. Заголовки запроса) — используются только в запросах.
Response Headers (рус. Заголовки ответа) — используются только в ответах.
Entity Headers (рус. Заголовки сущности) — сопровождают каждую сущность сообщения. Используются в запросах и ответах.

5. Какие заголовки повторяются в нескольких секциях? Какой в этом смысл?
content-type он может быть как в заголовках запроса, но так и в заголовках ответа, это означает что сервер и клиент меняются информацией о типе содержимого запроса и ответа.

6. Что из себя представляет тело ответа?
представляет данные или содержимое, то что сервер отправляет в ответ на запрос клиента. может быть html код страницы.

Задание №2. Исследование указывающих ответов сервера.

изменился порт в заголовке remote address, с 80 на 443.
сначала был status code:301 , изменился на status code:200 OK
адрес запроса изменился c http://rgups.ru/ на https://rgups.ru/

Задание №3. Исследование получения и передачи cookie.

1. Перечислите название этих параметров и формат данных в них.

они бывают сессионными, постоянными, сторонними, защищенными или те которые не видны коду браузера
set-cookie:_ym_d=;Path=/;Domain=ya.ru;Expires=Thu,19 Sep 2013 14:58:23 GMT
этот заголовок отправляется сервером и в нем содержится информация о новом cookie-параметре, который устанавливается на клиенте. Cookie заголовок отправляется клиентом в каждом запросе и содержит информацию о существующих параметрах cookie

2. Как можно удобно просмотреть все cookie, используемые на странице? Что означают их параметры Name, Value, Domain, Path и Expires?


Name- имя cookie-параметра оно уникально и используется для идентификации параметра на стороне клиента и сервера.
domain указывает хосты, на которые куки отсылаются
path указывает на URL, который должен быть в запрашиваемом ресурсе на момент отправки заголовка куки.
Value- значение куки параметра, определяет информацию , которую сервер хочет сохранить на клиенте.

3. Как просмотреть все cookie связанные с текущим (просматриваемым) сайтом?
Необходимо перейти на вкладку  Application во вкладку Cookies
4. Опишите своими словами как вы понимаете суть и назначение cookie?

Данные которые отправляет и хранит у себя браузер, основная цель это позволить веб-сайтам опознать и запомнить своих пользователей. они используются для сохранения разных данных на стороне клиента в виде пар ключ-значение.

Задание №4. Исследование построения документов и сопутствующих запросов.

1. Что такое DOM? — Опишите своими словами

интерфейс который предостовляет доступ прграмме к сйту html/xhtml/xml и может что-тщ поменять в содержимом

2. Может ли итоговый документ отличаться от тела ответа, полученного от сервера? Если да, то по каким причинам это может происходить?

может, если html был неккоретным или если поменялся

Задание №5. Определение параметров запроса.
Откройте главный сайт университета https://www.rgups.ru/services/time/. Используя инструменты разработчика вкладку Network определить запрос и параметры запроса позволяющие получить ваше расписание.

я выполнила get-запрос
https://www.rgups.ru/ajax/schedule.php?action=timetable&fac-id=1&course-id=3&group-id=26335&edu-type=internal Часть URL идущая после знака "?" говорит серверу какие данные необходимо получить. Данные, которые я получил выполнив запрос: action: timetable fac-id: 1 course-id: 3 group-id: 26335 edu-type: internal

– в режиме видеоконференцсвязи
Понедельник
1	8.20-9.50	обе недели	Военная подготовка ()	..	
2	10.05-11.35	обе недели	Военная подготовка ()	..	
3	12.05-13.35	обе недели	Военная подготовка ()	..	
4	13.50-15.20	обе недели	Военная подготовка ()	..	
5	15.30-17.00	обе недели	Военная подготовка ()	..	
Вторник (сегодня)
2	10.05-11.35	обе недели	Визуальное программирование и графические интерфейсы (ЛЕК)	ВЕДЕРНИКОВА О.Г.	Г313
3	12.05-13.35	обе недели	Схемотехника информационных систем (ЛАБ)	КРАВЧЕНКО И.Ф. [2]	Г302
Схемотехника информационных систем (ЛАБ)	СОКИРКА А.Д. [1]	Г303
4	13.50-15.20	обе недели	Веб-программирование (ЛАБ)	КАПКАЕВ А.А. [1]	Г315
Веб-программирование (ЛАБ)	ХУСАИНОВ В.Р. [2]	Г315
5	15.30-17.00	обе недели	Базы данных и прикладное программирование (ЛАБ)	ГАЛЬЦЕВА А.А. [2]	Г315
Базы данных и прикладное программирование (ЛАБ)	ЗЫРЯНКИНА К.Э. [1]	Г315
Среда (завтра)
1	8.20-9.50	обе недели	Визуальное программирование и графические интерфейсы (ЛАБ)	ОЛЬГЕЙЗЕР И.А. [2]	Д410
Визуальное программирование и графические интерфейсы (ЛАБ)	ВЕДЕРНИКОВА О.Г. [1]	Д407
2	10.05-11.35	обе недели	Экономика и менеджмент (ПРАК)	ТИМЧЕНКО О.В.	А420
3	12.05-13.35	обе недели	Базы данных и прикладное программирование (ЛЕК)	ИГНАТЬЕВА О.В.	Г313
4	13.50-15.20	обе недели	Схемотехника информационных систем (ЛЕК)	ЛЯЩЕНКО А.М.	Г313
Четверг
1	8.20-9.50	над чертой	—		
под чертой	Системное программное обеспечение информационных систем (ЛАБ)	ДЕМИЧЕВ А.А. [1]	Д407
2	10.05-11.35	обе недели	Экономика и менеджмент (ЛЕК)	КАЛАШНИКОВ И.А.	С204
3	12.05-13.35	над чертой	Безопасность жизнедеятельности (ЛЕК)	ПЕРЕВЕРЗЕВ И.Г.	М215
под чертой	Безопасность жизнедеятельности (ЛАБ)	ЯИЦКОВА Н.М. [1]	М153
Безопасность жизнедеятельности (ЛАБ)	ВОРОБИНСКАЯ Л.И. [2]	М156
4	13.50-15.20	над чертой	Безопасность жизнедеятельности (ПРАК)	ПЕРЕВЕРЗЕВ И.Г.	М231
под чертой	—		
Пятница
1	8.20-9.50	над чертой	Системное программное обеспечение информационных систем (ПРАК)	ЖУКОВ В.В.	Д407
под чертой	Системное программное обеспечение информационных систем (ЛАБ)	НИКИТЧЕНКО С.Л. [2]	Д406
2	10.05-11.35	обе недели	Системное программное обеспечение информационных систем (ЛЕК)	ЖУКОВ В.В.	Г313
3	12.05-13.35	обе недели	Веб-программирование (ЛЕК)	КАПКАЕВ А.А.	Г313