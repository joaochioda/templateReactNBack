connect(container) = docker exec -it backend_postgres_1 bash
connect(postgres-inside-container) = psql -d postgres -h localhost -p 5432 -U postgres
