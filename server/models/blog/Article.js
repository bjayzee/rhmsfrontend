import { Schema, model, models} from 'mongoose';

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

const Article = models.Article || model('Article', articleSchema);

export default Article;