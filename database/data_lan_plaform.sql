USE lan_plaform;

-- ROLES
INSERT INTO Roles (name)
VALUES
('admin'),
('organisateur'),
('joueur');

-- USERS
INSERT INTO Users (lastname, firstname, username, birthdate, password, email, role_id)
VALUES
('Clerc', 'Gatien', 'GatiX', '2000-05-14', '$2b$10$kHeB9L9AAaklIwNLaxsqc.MxawxxYarbH/AJ16QnFhwhr29VOgrVu', 'gatien@test.ch', 1),
('Martin', 'Lucas', 'Luuuuu', '2002-11-02', '$2b$10$e146Oe/NTd9mRt.F4Veb1OXjEZPsoGuEcqnJM759kcQSs8tEnP8um', 'lucas@test.ch', 3),
('Dupont', 'Anna', 'Annou', '1998-07-22', '$2b$10$e.QponbQUkk3Yahz2ePQvuq.GKprN7QfFQllTyH03FNRpGYTkEdxq', 'anna@test.ch', 3),
('Steiner', 'Max', 'Maxi', '1995-03-11', '$2b$10$LUNZqktPGfWOaDJ3OQlX7.lMwUYvnxaPKwm1d1SbYiZwr/L67G/Y2', 'max@test.ch', 2);

-- LANs
INSERT INTO LANs (name, date, location, max_participants)
VALUES
('WinterLAN', '2026-03-10', 'Yverdon-les-Bains', 40),
('SummerFragFest', '2026-07-22', 'Lausanne', 80);

-- USERS TAKE PART IN LANS
INSERT INTO Users_take_part_in_LANs (user_id, LAN_id)
VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 1);