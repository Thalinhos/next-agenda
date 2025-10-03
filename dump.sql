BEGIN TRANSACTION;

INSERT INTO User (id, nome, senha) VALUES (1, 'admin', '$2b$10$2EaNomwKrzMecATiRosboeWHoEYdQrUpvhzg0f1yRbyUgUOURWSHO');

INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (1, 'festa de aniversario do thalisson', '16/12/2024', NULL, 0, '2025-09-18T16:00:38.054Z', '2025-09-18T16:33:37.800Z', NULL);
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (2, 'Sample Event', '25/10/2025', '16:00', 1, '2025-09-18T16:27:20.633Z', '2025-09-18T16:39:03.639Z', '#00FF00');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (3, 'Sample Event 2', '25/10/2025', '16:00', 0, '2025-09-18T16:36:27.946Z', '2025-09-18T17:21:33.803Z', '#00FF00');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (4, 'Sample Event 3', '25/09/2025', '16:00', 1, '2025-09-18T16:58:33.421Z', '2025-09-18T16:58:33.421Z', NULL);
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (5, 'Sample Event 4', '18/09/2025', '16:00', 1, '2025-09-18T16:58:44.616Z', '2025-09-18T17:19:16.364Z', '#d82525');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (6, 'Sample Event 5', '18/09/2025', '16:00', 1, '2025-09-18T16:58:50.217Z', '2025-09-18T17:19:16.364Z', '#d82525');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (7, 'Sample 22Event 5', '20/09/2025', '18:30', 1, '2025-09-18T16:59:08.256Z', '2025-09-18T17:20:50.227Z', '#d015aa');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (8, 'testeeee', '19/09/2025', '00:30', 1, '2025-09-18T17:19:49.044Z', '2025-09-18T17:19:57.689Z', '#2f9623');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (9, 'teste2222222222222222222', '24/09/2025', '18:31', 1, '2025-09-18T17:21:14.701Z', '2025-10-01T01:50:06.300Z', '#af18a1');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (10, 'teste 22224', '01/09/2025', '17:45', 1, '2025-10-01T00:57:31.640Z', '2025-10-01T01:49:56.313Z', '#d02727');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (11, '22222', '01/09/2025', '22:23', 1, '2025-10-01T01:06:25.633Z', '2025-10-01T01:49:56.313Z', '#d02727');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (12, 'teste2222', '01/10/2025', '13:31', 1, '2025-10-03T13:41:02.627Z', '2025-10-03T14:39:04.664Z', '#2520d2');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (13, 'vamoooo', '17/10/2025', '13:30', 1, '2025-10-03T13:47:56.216Z', '2025-10-03T13:47:56.216Z', NULL);
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (14, 'teste 2', '03/10/2025', '13:30', 1, '2025-10-03T13:51:38.829Z', '2025-10-03T13:54:12.093Z', '#de2b2b');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (15, 'dois dois', '01/10/2025', '17:30', 1, '2025-10-03T13:54:30.979Z', '2025-10-03T14:39:04.664Z', '#2520d2');
INSERT INTO Event (id, descricao, data, hora, active, createdAt, updatedAt, css_bg_color) VALUES (16, 'teste 222', '01/10/2025', '08:45', 1, '2025-10-03T14:38:58.076Z', '2025-10-03T14:39:04.664Z', '#2520d2');

COMMIT;