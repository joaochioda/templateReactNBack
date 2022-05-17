module.exports = {
  dialect: "postgres",
  host: "host.docker.internal",
  username: "postgres",
  password: "postgres",
  database: "pg_db",
  define: {
    timestamps: true,
    underscored: true,
  },
};
