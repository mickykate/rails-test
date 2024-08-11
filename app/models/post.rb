class Post < ApplicationRecord
    validates :title, presence: true, length: { maximum: 20, message: "は %{count} 文字以内で入力してください。"}
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :memo, length: { maximum: 500, message: "は %{count} 文字以内で入力してください。"}
    validate :date_before_finish

    def date_before_finish
        return if end_date.blank? || start_date.blank?
        errors.add(:end_date, "は開始日以降のものを選択してください") if end_date < start_date
    end
end
