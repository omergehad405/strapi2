module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-eu-central-1.pooler.supabase.com"),
      port: env.int("DATABASE_PORT", 6543),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres.euhndzlgwqxoxvpsohyl"),
      password: env("DATABASE_PASSWORD", "h4VHVeaO7BEEzrnc"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    debug: false,
  },
});
