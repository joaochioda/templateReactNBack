module.exports = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: "postgres",
  password: "postgres",
  database: "pg_db",
  define: {
    timestamps: true,
    underscored: true,
  },
};
